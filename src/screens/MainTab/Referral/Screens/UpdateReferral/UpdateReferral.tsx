import ReferralSvg from 'assets/svg/ReferralSvg';
import {
  MainLayout,
  ModalCus,
  TextCus,
  TextInputs,
  TouchCus,
  ViewCus,
} from 'components';
import { NavigationService } from 'navigation';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { width } from 'utils';

const UpdateReferral = () => {
  const { t } = useTranslation();
  const { params } = NavigationService.route();
  const [openModal, setOpenModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  return (
    <MainLayout
      showTextBack={false}
      showAuthHeader
      titleAuthHeader={t('referral.referral')}
      renderRight={() => (
        <TouchCus onPress={() => params?.setOpenPolicy(true)}>
          {ReferralSvg.Document()}
        </TouchCus>
      )}>
      <ViewCus px-24>
        <ViewCus fd-row items-center justify-space-between mt-40>
          <TextCus darkPrimaryColor body2 useI18n>
            referral.referrer
          </TextCus>
          <TextInputs
            placeholder={t('referral.enter_code')}
            style={{ width: width - 160 }}
          />
        </ViewCus>
        <TouchCus
          onPress={() => {
            setOpenModal(true);
            setTitleModal(t('referral.invalid_code'));
          }}
          style={styles.btnHistory}>
          <TextCus useI18n body2 bold whiteColor>
            button.update
          </TextCus>
        </TouchCus>
        <ModalCus
          visible={openModal}
          showIconClose={false}
          hideModal={() => setOpenModal(false)}
          title={titleModal}>
          <TouchCus
            onPress={() => setOpenModal(false)}
            style={styles.btnHistory}>
            <TextCus useI18n body2 bold whiteColor>
              button.close
            </TextCus>
          </TouchCus>
        </ModalCus>
      </ViewCus>
    </MainLayout>
  );
};

export default UpdateReferral;

const styles = StyleSheet.create({
  btnHistory: {
    height: 44,
    backgroundColor: Colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    borderRadius: 8,
    width: '100%',
  },
});
