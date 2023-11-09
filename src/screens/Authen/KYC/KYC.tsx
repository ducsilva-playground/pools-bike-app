import { API_HOST } from '@env';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  HomeLayout,
  IconCus,
  ImageCus,
  TextCus,
  TextInputs,
  TouchCus,
} from 'components';
import { useAuth } from 'hooks';
import { NavigationService } from 'navigation';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  InteractionManager,
  Keyboard,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import ImagePicker, { Image, Options } from 'react-native-image-crop-picker';
import { Colors } from 'theme';
import { IUserKYC } from 'types';
import {
  dimensions,
  formatDMY,
  // getPrevDay,
  // isIos,
  styleSpacing,
  yupSchemaInfoUser,
} from 'utils';
import styles from './styles';

const { width } = dimensions;

const UploadImageConfig: Options = {
  width: width,
  height: width,
  cropping: false,
  includeBase64: false,
  multiple: false,
};

let baseUrl = 'https://dashboard-api-dev.poolsmobility.com/';

export default function KYC() {
  const { params } = NavigationService.route() || '';
  const refModal = useRef<BottomSheet>(null);
  const [showModal, setShowModal] = useState(false);
  const { onUpdateInfoUser, loading } = useAuth();

  const initValuesForm: IUserKYC = useMemo(
    () => ({
      avatar: params?.avatar
        ? `${API_HOST || baseUrl}/images?path=${params?.avatar}`
        : '',
      fullName: params?.full_name ?? '',
      phone: params?.phone_number ?? '',
      email: params?.email ?? '',
      accountBank: params?.account_bank ?? '',
      identificationFront: params?.identification?.front_image
        ? `${API_HOST || baseUrl}/images?path=${
            params.identification.front_image
          }`
        : '',
      identificationBack: params?.identification?.back_image
        ? `${API_HOST || baseUrl}/images?path=${
            params.identification.back_image
          }`
        : '',
      licenseFront: params?.license?.front_image
        ? `${API_HOST || baseUrl}/images?path=${params.license.front_image}`
        : '',
      licenseBack: params?.license?.back_image
        ? `${API_HOST || baseUrl}/images?path=${params.license.back_image}`
        : '',
      birthday: params?.birthday ? formatDMY(params?.birthday) : '',
      address: params?.address ?? '',
    }),
    [JSON.stringify(params)],
  );

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<IUserKYC>({
    mode: 'onSubmit',
    resolver: yupResolver(yupSchemaInfoUser),
    defaultValues: { ...initValuesForm },
  });

  const uploadImage = ({ mime, filename, path }: Image) => {
    if (filename) {
      filename = `${new Date().getTime()}_${filename}`;
    }
    return {
      filename,
      fileType: mime,
      uri: Platform.OS === 'android' ? path : path.replace('file://', ''),
    };
  };

  const [imageList, setImageList] = useState<any>({});

  const [keyboardStatus, setKeyboardStatus] = useState('');

  const selectFile = useCallback(
    (key: string) => {
      InteractionManager.runAfterInteractions(() => {
        ImagePicker.openPicker({
          ...UploadImageConfig,
          mediaType: 'photo',
        }).then((image: any) => {
          const infoImage = uploadImage(image as Image);
          setValue(key, infoImage);
          setImageList({ ...imageList, [`${key}`]: image });
        });
      });
    },
    [imageList],
  );

  const onHandleUpdateInfoUser = useCallback(
    (value: IUserKYC) => {
      onUpdateInfoUser(
        { formData: value, userId: params?.id, showToast: false },
        rs => {
          rs && setShowModal(true);
        },
      );
    },
    [onUpdateInfoUser],
  );

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const headerProps = {
    renderLeft: () => (
      <IconCus name={'chevron-left'} size={18} color={Colors.white} />
    ),
    renderCenter: () => (
      <TextCus title3 whiteColor medium>
        Thông tin cá nhân
      </TextCus>
    ),
  };

  return (
    <>
      <HomeLayout statusBarMode={'dark-content'} header={{ ...headerProps }}>
        <View style={styles.container}>
          <View style={styles.flex1}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[styleSpacing('px-16')]}>
              <View style={styles.cenItem}>
                <View style={getHeight(24)} />
                <Controller
                  control={control}
                  name={'avatar'}
                  rules={{ required: false }}
                  render={() => (
                    <View style={[styles.wrapAvatar, styles.cenItemvh]}>
                      {imageList?.avatar ? (
                        <ImageCus
                          style={[styles.wrapAvatar]}
                          source={{ uri: `${imageList?.avatar.path}` }}
                        />
                      ) : params?.avatar ? (
                        <ImageCus
                          style={[styles.wrapAvatar]}
                          source={{
                            uri: `${API_HOST}/images?path=${params.avatar}`,
                          }}
                        />
                      ) : (
                        <IconCus
                          name={'camera'}
                          size={18}
                          color={Colors.white}
                        />
                      )}
                      <TouchCus
                        onPress={() => selectFile('avatar')}
                        style={[
                          styles.posBtnCamera,
                          styles.posAbsolute,
                          styles.wrapBtnCamera,
                          styles.cenItemvh,
                        ]}>
                        <IconCus
                          name={'camera'}
                          size={8}
                          color={Colors.white}
                        />
                      </TouchCus>
                    </View>
                  )}
                />
                <View style={getHeight(16)} />
              </View>
              <Controller
                control={control}
                name={'fullName'}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <View style={[styles.rowItem]}>
                      <TextCus>Họ tên </TextCus>
                      <TextCus errorColor>*</TextCus>
                    </View>
                    <TextInputs
                      style={[styles.input]}
                      autoCapitalize="none"
                      placeholder={'Họ tên'}
                      onChangeText={onChange}
                      value={value}
                      onBlur={onBlur}
                      color={Colors.colorLine}
                      success
                    />
                  </>
                )}
              />
              {errors.fullName && (
                <TextCus style={styles.fieldTextRequired}>
                  {errors.fullName?.message as string}
                </TextCus>
              )}
              <Controller
                control={control}
                name={'phoneNumber'}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <View style={[styles.rowItem]}>
                      <TextCus>Số điện thoại </TextCus>
                      <TextCus errorColor>*</TextCus>
                    </View>
                    <TextInputs
                      style={[styles.inputDisabled]}
                      autoCapitalize="none"
                      placeholder={'Số điện thoại'}
                      onChangeText={onChange}
                      keyboardType="phone-pad"
                      value={value}
                      onBlur={onBlur}
                      color={Colors.colorLine}
                      editable={false}
                      success
                    />
                  </>
                )}
              />
              {errors.phone && (
                <TextCus style={styles.fieldTextRequired}>
                  Số điện thoại không được trống
                </TextCus>
              )}
              <Controller
                control={control}
                name={'email'}
                rules={{ required: false }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <View style={[styles.rowItem]}>
                      <TextCus>Email</TextCus>
                    </View>
                    <TextInputs
                      style={[styles.input]}
                      autoCapitalize="none"
                      placeholder={'Email'}
                      onChangeText={onChange}
                      value={value}
                      onBlur={onBlur}
                      color={Colors.colorLine}
                      success
                    />
                  </>
                )}
              />
              <Controller
                control={control}
                name={'address'}
                rules={{ required: false }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <View style={[styles.rowItem]}>
                      <TextCus>Địa chỉ</TextCus>
                    </View>
                    <TextInputs
                      style={[styles.input]}
                      autoCapitalize="none"
                      placeholder={'Địa chỉ'}
                      onChangeText={onChange}
                      value={value}
                      onBlur={onBlur}
                      color={Colors.colorLine}
                      success
                    />
                  </>
                )}
              />
            </ScrollView>
          </View>
          <View
            style={[
              styles.bgWhite,
              styleSpacing('mx-16'),
              styleSpacing('my-8'),
            ]}>
            <TouchCus
              style={[styles.radius4, styles.btnActive, styles.cenItem]}
              onPress={() => {
                keyboardStatus === 'Keyboard Shown' && Keyboard.dismiss();
                handleSubmit(onHandleUpdateInfoUser)();
              }}
              disabled={loading}>
              <TextCus whiteColor medium my-12 useI18n style={[styles.lh24]}>
                continue
              </TextCus>
            </TouchCus>
          </View>
        </View>
      </HomeLayout>
      {/* {showModal && (
        <BottomSheetModals
          type="success"
          onOk={() => NavigationService.replace(Routes.HomeTabs)}
          onClose={() => setShowModal(false)}
          top={isIos ? '35%' : '40%'}
          titleBtn="Bắt đầu ngay"
          title="Đăng ký thành công"
          subtitle="Chào mừng bạn đã đến và trải nghiệm cùng EXC"
        />
      )}
      <BottomSheetPicker ref={refModal}>
        <SelecterPicker
          selectOptionTitle={'Sinh nhật'}
          selectType={SELECT_OPTION.DATE_PICKER}
          maxDate={getPrevDay()}
          onCancelSelect={() => refModal.current?.close()}
          onConfirmSelect={date => {
            setValue('birthday', formatDMY(date));
            InteractionManager.runAfterInteractions(() => {
              refModal.current?.close();
            });
          }}
        />
      </BottomSheetPicker> */}
    </>
  );
}
