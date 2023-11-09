import ReferralSvg from 'assets/svg/ReferralSvg';
import { MainLayout, TextCus, TouchCus, ViewCus } from 'components';
import { NavigationService } from 'navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { copyToClipboard } from 'utils';

const HistoryReferral = () => {
  const { params } = NavigationService.route();
  const { t } = useTranslation();
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
        <ViewCus fd-row items-center justify-flex-start mt-20>
          <ViewCus fd-row items-center justify-center style={styles.boxLevel}>
            <TextCus useI18n bold caption1>
              referral.level
            </TextCus>
            <TextCus ml-3 bold caption1>
              2
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
            <TextCus body2>WEKHJ312d12AD</TextCus>
            <TouchCus onPress={() => copyToClipboard('WEKHJ312d12AD')}>
              <ViewCus mx-8>{ReferralSvg.Copy()}</ViewCus>
            </TouchCus>
            <TouchCus onPress={() => {}}>{ReferralSvg.QRCode()}</TouchCus>
          </ViewCus>
        </ViewCus>
        <ViewCus fd-row items-center justify-space-between mt-14>
          <TextCus darkPrimaryColor body2>
            {t('referral.referral_code')} 3
          </TextCus>
          <ViewCus fd-row items-center justify-center>
            <TextCus body2 useI18n paramI18n={{ total: 100 }}>
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

        <ViewCus fd-row items-center justify-flex-start mt-20>
          <TextCus body1 whiteColor useI18n>
            referral.referral_information
          </TextCus>
        </ViewCus>
        <ViewCus fd-row items-center justify-space-between mt-14>
          <TextCus darkPrimaryColor body2 useI18n>
            referral.referral_code
          </TextCus>
          <ViewCus fd-row items-center justify-center>
            <TextCus body2>WEKHJ312d12AD</TextCus>
            <TouchCus onPress={() => copyToClipboard('WEKHJ312d12AD')}>
              <ViewCus mx-8>{ReferralSvg.Copy()}</ViewCus>
            </TouchCus>
            <TouchCus onPress={() => {}}>{ReferralSvg.QRCode()}</TouchCus>
          </ViewCus>
        </ViewCus>
        <ViewCus fd-row items-center justify-space-between mt-14>
          <TextCus darkPrimaryColor body2 useI18n>
            referral.used_at
          </TextCus>
          <ViewCus fd-row items-center justify-center>
            <TextCus body2 useI18n>
              2023-07-14 14:00:00
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

        <TouchCus onPress={() => {}} style={styles.btnHistory}>
          <TextCus body2 bold whiteColor useI18n>
            referral.referral_statistics
          </TextCus>
        </TouchCus>
      </ViewCus>
    </MainLayout>
  );
};

export default HistoryReferral;

const styles = StyleSheet.create({
  boxLevel: {
    height: 40,
    paddingHorizontal: 24,
    backgroundColor: Colors.color5A,
    borderRadius: 24,
  },
  textGreen: {
    color: Colors.color1E,
  },
  btnHistory: {
    height: 44,
    backgroundColor: Colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    borderRadius: 8,
  },
});
