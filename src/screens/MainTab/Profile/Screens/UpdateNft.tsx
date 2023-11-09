import {
  Buttons,
  MainLayout,
  ModalCus,
  TextCus,
  TextInputs,
  ViewCus,
} from 'components';
import { NavigationService, Routes } from 'navigation';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'theme';

const UpdateNft = () => {
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  return (
    <MainLayout showAuthHeader titleAuthHeader="profile.nft_detail">
      <ViewCus px-24>
        <TextCus
          mt-60
          useI18n
          whiteColor
          body1
          textAlign="center"
          style={{ lineHeight: 22 }}>
          profile.desc_nft_detail
        </TextCus>
        <ViewCus fd-column mt-24>
          <TextInputs />
          <Buttons onPress={() => setOpenModalConfirm(true)}>
            <TextCus bold body2 useI18n>
              button.update
            </TextCus>
          </Buttons>
        </ViewCus>
      </ViewCus>
      <ModalCus
        hideModal={() => setOpenModalConfirm(false)}
        visible={openModalConfirm}
        title="profile.note">
        <ViewCus>
          <TextCus
            useI18n
            body1
            textAlign="center"
            whiteColor
            style={styles.textContent}>
            profile.desc_confirm_nft
          </TextCus>
          <ViewCus fd-row items-center justify-space-between mt-24>
            <Buttons
              outline
              style={styles.btnClose}
              onPress={() => setOpenModalConfirm(false)}>
              <TextCus useI18n primaryColor body2>
                button.close
              </TextCus>
            </Buttons>
            <Buttons
              style={styles.btnVerify}
              onPress={() => NavigationService.navigate(Routes.DetailNft)}>
              <TextCus useI18n whiteColor body2>
                button.verify
              </TextCus>
            </Buttons>
          </ViewCus>
        </ViewCus>
      </ModalCus>
    </MainLayout>
  );
};

export default UpdateNft;

const styles = StyleSheet.create({
  btnClose: {
    width: '47%',
    backgroundColor: Colors.transparent,
  },
  btnVerify: {
    width: '47%',
  },
  textContent: {
    marginTop: 10,
    lineHeight: 22,
    letterSpacing: 0.024,
    fontWeight: '400',
  },
});
