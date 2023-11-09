import CommonSvg from 'assets/svg/CommonSvg';
import { TextCus, TouchCus, ViewCus } from 'components';
import React, { ReactNode } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { height, width } from 'utils/helpers/libs';

export function ModalCus(props: IModalProps) {
  const {
    visible,
    children,
    showIconClose = true,
    title,
    hideModal,
    ...rest
  } = props;
  const isIos = Platform.OS === 'ios';

  return visible ? (
    <Portal>
      <Modal
        style={{ backgroundColor: '#rgba(0, 0, 0, 0.2)' }}
        visible={visible}
        onDismiss={hideModal}
        {...rest}>
        <ViewCus
          style={
            isIos
              ? [styles.containerModal, styles.styleCommon]
              : styles.styleCommon
          }>
          <ViewCus style={styles.containerModalCondition}>
            {showIconClose && (
              <TouchCus style={styles.close} onPress={hideModal}>
                <ViewCus>{CommonSvg.Close()}</ViewCus>
              </TouchCus>
            )}
            <TextCus semibold whiteColor title3 mb-10 useI18n>
              {title}
            </TextCus>
            {children}
          </ViewCus>
        </ViewCus>
      </Modal>
    </Portal>
  ) : null;
}

const styles = StyleSheet.create({
  container: { height: height - 60 },
  containerModal: {
    width,
    height: height + 65,
  },
  styleCommon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Modal condition
  containerModalCondition: {
    backgroundColor: '#1F1F1F',
    position: 'relative',
    width: width - 48,
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export interface IModalProps {
  style?: any;
  title?: string;
  children: ReactNode;
  hideModal: () => void;
  visible: boolean;
  showTitle?: boolean;
  showIconClose?: boolean;
}
