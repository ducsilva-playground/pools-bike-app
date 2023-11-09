import { Images } from 'assets';
import { TextCus, TouchCus, ViewCus } from 'components';
import { usePermission } from 'hooks';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  InteractionManager,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import ImagePicker, { Options } from 'react-native-image-crop-picker';
import RBSheet, { RBSheetProps } from 'react-native-raw-bottom-sheet';
import { Colors } from 'theme';
import { uploadImage } from 'utils';

const UploadImageConfig: Options = {
  includeBase64: false,
  multiple: false,
  useFrontCamera: true,
  compressImageQuality: 1,
  compressImageMaxWidth: 200,
  compressImageMaxHeight: 200,
};
interface IProps {
  onChangePicture: (image: FormData) => void;
  value?: string;
  style?: StyleProp<ViewStyle>;
  type?: string;
  isView?: boolean;
  config?: Options;
}
const ImageCropPicker: React.FC<IProps> = ({
  onChangePicture,
  value,
  style,
  type = 'avatar',
  isView = false,
  config = UploadImageConfig,
}) => {
  const [picture, setPicture] = useState<Image>();
  const refRBSheet = useRef<RBSheetProps>();
  const { requestAvatarPermission } = usePermission();

  const onOpenCamera = useCallback(() => {
    InteractionManager.runAfterInteractions(() => {
      ImagePicker.openCamera({
        ...config,
        mediaType: 'photo',
      })
        .then(image => {
          const infoImage = uploadImage(image as Image, type, false);

          setPicture(image as Image);
          onChangePicture(infoImage);
        })
        .catch(() => {
          refRBSheet.current?.close();
        });
    });
  }, [onChangePicture, picture]);

  const onOpenLibrary = useCallback(() => {
    InteractionManager.runAfterInteractions(() => {
      ImagePicker.openPicker(config)
        .then(image => {
          const infoImage = uploadImage(image as Image, type, false);
          setPicture(image as Image);
          onChangePicture(infoImage);
        })
        .catch(() => {
          refRBSheet.current?.close();
        });
    });
  }, [onChangePicture, picture]);

  useEffect(() => {
    if (value) {
      setPicture(value);
    }
  }, [value]);

  return (
    <>
      <ViewCus style={styles.wrapLogo}>
        <TouchCus
          onPress={() => {
            if (!isView) {
              refRBSheet.current.open();
            }
          }}
          //Images.default_avatar
          style={[style ? style : styles.wrapTitle]}>
          {picture || value ? (
            <Animated.View style={[style ? style : styles.wrapTitle]}>
              <Image
                source={{
                  uri: picture?.path
                    ? picture?.path
                    : picture
                    ? picture
                    : value
                    ? value
                    : Images.default_avatar,
                }}
                style={[style ? style : styles.wrapTitle]}
              />
              <ViewCus style={styles.posBtnTitle}>
                {/* <Icon.Close color={Colors.black} /> */}
              </ViewCus>
            </Animated.View>
          ) : (
            <Animated.View style={[style ? style : styles.wrapTitle]}>
              <Image
                source={Images.default_avatar}
                style={[style ? style : styles.wrapTitle]}
              />
              <ViewCus style={styles.posBtnTitle}>
                {/* <Icon.Camera color={Colors.black} /> */}
              </ViewCus>
            </Animated.View>
          )}
        </TouchCus>
      </ViewCus>
      <RBSheet
        animationType="fade"
        height={150}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: Colors.modalOverlay,
          },
          container: styles.container,
          draggableIcon: {
            backgroundColor: Colors.whisper,
          },
        }}>
        <ViewCus h-100>
          <TextCus textAlign="center" useI18n>
            store.title_upload
          </TextCus>
          <ViewCus style={styles.content}>
            <TouchCus
              style={styles.btnImagePicker}
              onPress={onOpenCamera}
              activeOpacity={0.8}>
              <TextCus bold useI18n>
                store.take_screen
              </TextCus>
            </TouchCus>
            <TouchCus
              style={styles.btnImagePicker}
              onPress={onOpenLibrary}
              activeOpacity={0.8}>
              <TextCus bold useI18n>
                store.upload_library
              </TextCus>
            </TouchCus>
          </ViewCus>
        </ViewCus>
      </RBSheet>
    </>
  );
};
const styles = StyleSheet.create({
  wrapTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: Colors.dark,
    resizeMode: 'contain',
  },
  wrapLogo: {
    alignItems: 'center',
    marginVertical: 20,
  },
  posBtnTitle: {
    top: 5,
    right: 5,
    position: 'absolute',
  },
  container: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: Colors.dark,
  },
  content: {
    paddingHorizontal: 16,
  },
  btnImagePicker: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark,
  },
});
export default ImageCropPicker;
