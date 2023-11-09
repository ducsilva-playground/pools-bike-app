import { ViewCus } from 'components/ViewCus';
import React, { Ref, forwardRef, useImperativeHandle, useRef } from 'react';
import RBSheet, { RBSheetProps } from 'react-native-raw-bottom-sheet';
import { Colors } from 'theme';
import { IRefBottom } from 'types';
import { StyleSheet } from 'react-native';
import { TouchCus } from 'components/TouchCus';
import SvgIcon from 'assets/IconSVG';

interface IBottomSheet {
  children: React.ReactNode;
  height?: number;
}

const BottomSheetCommon = (
  { height = 200, children }: IBottomSheet,
  ref: Ref<IRefBottom>,
) => {
  const refRBSheet = useRef<RBSheetProps | IRefBottom>();

  useImperativeHandle(ref, () => {
    return {
      close: () => refRBSheet.current?.close(),
      open: () => refRBSheet.current?.open(),
    };
  });

  return (
    <ViewCus>
      <RBSheet
        animationType="fade"
        height={height}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: Colors.transparent,
          },
          draggableIcon: {
            backgroundColor: Colors.color00C,
          },
          container: styles.container,
        }}>
        <TouchCus
          style={styles.iconClose}
          onPress={() => refRBSheet.current?.close()}>
          {SvgIcon.Close()}
        </TouchCus>
        {children}
        {/* {children} children with multiple choices: View, ScrollView, FlatList */}
      </RBSheet>
    </ViewCus>
  );
};

export default forwardRef(BottomSheetCommon);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.color11,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'relative',
  },
  iconClose: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: 24,
    justifyContent: 'flex-end',
  },
});
