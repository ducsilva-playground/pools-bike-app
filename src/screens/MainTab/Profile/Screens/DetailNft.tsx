import { Images } from 'assets';
import { ImageCus, MainLayout, TextCus, ViewCus } from 'components';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Colors } from 'theme';
import { formatAddress, width } from 'utils';

const DetailNft = () => {
  return (
    <MainLayout showAuthHeader titleAuthHeader="profile.nft_detail">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewCus px-24>
          <ImageCus
            source={Images.bnevent}
            resizeMode={'contain'}
            style={styles.bEvent}
          />
          <ViewCus style={styles.boxInfo} mt-34>
            <ViewCus fd-row items-center justify-space-between mb-10>
              <TextCus caption1 whiteColor useI18n>
                profile.nft_class
              </TextCus>
              <TextCus caption1 darkPrimaryColor>
                C
              </TextCus>
            </ViewCus>
            <ViewCus fd-row items-center justify-space-between mb-10>
              <TextCus caption1 whiteColor useI18n>
                profile.sale_reward
              </TextCus>
              <TextCus caption1 darkPrimaryColor>
                2%
              </TextCus>
            </ViewCus>
            <ViewCus fd-row items-center justify-space-between mb-10>
              <TextCus caption1 whiteColor useI18n>
                profile.bought_at
              </TextCus>
              <TextCus caption1 darkPrimaryColor>
                2023-01-23 10:32:12
              </TextCus>
            </ViewCus>
            <ViewCus fd-row items-center justify-space-between mb-10>
              <TextCus useI18n caption1 whiteColor>
                profile.from
              </TextCus>
              <TextCus caption1 darkPrimaryColor>
                {formatAddress('0xsa78837gdhsggf236tg8732t', 6, 6)}
              </TextCus>
            </ViewCus>
            <ViewCus fd-row items-center justify-space-between mb-10>
              <TextCus caption1 whiteColor useI18n>
                profile.transaction_hash
              </TextCus>
              <TextCus caption1 color1E>
                {formatAddress('0dasdsaxsa78837gdhsggf236tgdas8732t', 10, 6)}
              </TextCus>
            </ViewCus>
            <ViewCus fd-row items-center mt-5>
              <TextCus
                caption2
                color51
                useI18n
                paramI18n={{
                  date: '2023-07-10 - 10:00:00',
                }}>
                profile.transaction_at
              </TextCus>
            </ViewCus>
          </ViewCus>
          <TextCus body2 whiteColor mt-34 useI18n mb-24>
            profile.benefit
          </TextCus>
          <ViewCus fd-column items-center justify-center>
            <ViewCus
              fd-row
              items-center
              justify-space-between
              style={styles.boxBenefit}>
              <TextCus caption1 colorE1 useI18n>
                profile.phone_revenue
              </TextCus>
              <TextCus caption1 colorE1>
                xxx%
              </TextCus>
            </ViewCus>

            <ViewCus
              fd-row
              items-center
              justify-space-between
              style={styles.boxBenefit}>
              <TextCus useI18n paramI18n={{ level: 2 }} caption1 colorE1>
                profile.referral_level
              </TextCus>
              <TextCus caption1 colorE1>
                xxx%
              </TextCus>
            </ViewCus>

            <ViewCus
              fd-row
              items-center
              justify-space-between
              style={styles.boxBenefit}>
              <TextCus useI18n paramI18n={{ level: 3 }} caption1 colorE1>
                profile.referral_level
              </TextCus>
              <TextCus caption1 colorE1>
                xxx%
              </TextCus>
            </ViewCus>
          </ViewCus>
        </ViewCus>
      </ScrollView>
    </MainLayout>
  );
};

export default DetailNft;

const styles = StyleSheet.create({
  bEvent: {
    width: width - 48,
    height: (width - 48) / 2,
    marginTop: 32,
  },
  boxInfo: {
    borderRadius: 24,
    backgroundColor: Colors.color11,
    borderWidth: 1,
    borderColor: Colors.color33,
    padding: 12,
  },
  boxBenefit: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: Colors.color11,
    borderWidth: 1,
    borderColor: Colors.color33,
    padding: 8,
    marginBottom: 8,
  },
});
