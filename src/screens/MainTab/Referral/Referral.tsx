import ReferralSvg from 'assets/svg/ReferralSvg';
import { MainLayout, ModalCus, TextCus, TouchCus, ViewCus } from 'components';
import { NavigationService, Routes } from 'navigation';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Colors } from 'theme';
import { copyToClipboard } from 'utils';
import styles from './styles';

const Referral = () => {
  const { t } = useTranslation();
  const [openPolicy, setOpenPolicy] = useState(false);

  return (
    <MainLayout
      showTextBack={false}
      showAuthHeader
      titleAuthHeader="referral.referral"
      renderRight={() => (
        <TouchCus onPress={() => setOpenPolicy(true)}>
          {ReferralSvg.Document()}
        </TouchCus>
      )}>
      <ViewCus style={styles.container} px-24>
        <ViewCus fd-row items-center justify-flex-end mt-20>
          <ViewCus fd-row items-center justify-center style={styles.boxLevel}>
            <TextCus useI18n bold caption1>
              referral.level
            </TextCus>
            <TextCus ml-3 bold caption1>
              1
            </TextCus>
          </ViewCus>
        </ViewCus>
        <ViewCus fd-row items-center justify-space-between mt-28>
          <TextCus darkPrimaryColor body2 useI18n>
            referral.referral_link
          </TextCus>
          <ViewCus fd-row items-center>
            <TextCus
              body2
              useI18n
              mr-8
              numberOfLines={1}
              style={[styles.textGreen, { width: 126 }]}>
              http//deeplink/dasboard
            </TextCus>
            <TouchCus
              onPress={() => copyToClipboard('http//deeplink/dasboard')}>
              {ReferralSvg.Copy()}
            </TouchCus>
          </ViewCus>
        </ViewCus>
        <ViewCus fd-row items-center justify-space-between mt-14>
          <TextCus darkPrimaryColor body2 useI18n>
            referral.referral_code
          </TextCus>
          <ViewCus fd-row items-center justify-center>
            <TextCus body2 useI18n>
              WEKHJ312d12AD
            </TextCus>
            <TouchCus onPress={() => copyToClipboard('WEKHJ312d12AD')}>
              <ViewCus mx-8>{ReferralSvg.Copy()}</ViewCus>
            </TouchCus>
            <TouchCus
              onPress={() => {
                NavigationService.navigate(Routes.UpdateReferral, {
                  setOpenPolicy: setOpenPolicy,
                });
              }}>
              {ReferralSvg.QRCode()}
            </TouchCus>
          </ViewCus>
        </ViewCus>
        <ViewCus fd-row items-center justify-space-between mt-14>
          <TextCus darkPrimaryColor body2>
            {t('referral.referral_code')} 2
          </TextCus>
          <ViewCus fd-row items-center justify-center>
            <TextCus
              body2
              useI18n
              paramI18n={{
                total: 100,
              }}>
              referral.people
            </TextCus>
          </ViewCus>
        </ViewCus>
        <ViewCus fd-row items-center justify-space-between mt-14>
          <TextCus darkPrimaryColor body2>
            {t('referral.referral_code')} 3
          </TextCus>
          <ViewCus fd-row items-center justify-center>
            <TextCus
              useI18n
              body2
              paramI18n={{
                total: 100,
              }}>
              referral.people
            </TextCus>
          </ViewCus>
        </ViewCus>
        <ViewCus fd-row items-center justify-space-between mt-14>
          <TextCus darkPrimaryColor body2 useI18n>
            referral.distributed_benefit
          </TextCus>
          <TextCus
            body2
            useI18n
            style={[
              styles.textGreen,
              { borderBottomWidth: 1, borderBottomColor: Colors.color1E },
            ]}>
            $100.00
          </TextCus>
        </ViewCus>
        <TouchCus
          onPress={() => {
            NavigationService.navigate(Routes.HistoryReferral, {
              setOpenPolicy,
            });
          }}
          style={styles.btnHistory}>
          <TextCus body2 bold whiteColor useI18n>
            referral.referral_member_history
          </TextCus>
        </TouchCus>
        <ModalCus
          visible={openPolicy}
          hideModal={() => setOpenPolicy(false)}
          showTitle={true}
          title="referral.referral_policy">
          <TextCus
            style={{ lineHeight: 18 }}
            darkPrimaryColor
            caption1
            textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            consectetur repellat minima laborum, sint aperiam perspiciatis,
            quasi voluptas, dolorum ab quas officiis neque optio tenetur ipsum
            magni atque ex? Deleniti? Lorem ipsum dolor sit amet consectetur
          </TextCus>
        </ModalCus>
      </ViewCus>
    </MainLayout>
  );
};

export default Referral;
