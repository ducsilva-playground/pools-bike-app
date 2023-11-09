import {
  ImageCus,
  MainLayout,
  ParseHtmlCommon,
  TextCus,
  ViewCus,
} from 'components';
import { NavigationService } from 'navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { formartDateTime, genUrlImage, width } from 'utils';

const NewDetail = () => {
  const { params } = NavigationService.route();
  const { data } = params;
  const { t } = useTranslation();

  return (
    <MainLayout
      showTextBack={false}
      showAuthHeader
      titleAuthHeader={data?.title}>
      <ViewCus px-24>
        <ImageCus
          source={genUrlImage(data?.thumbnail)}
          resizeMode={'contain'}
          style={styles.bEvent}
        />
        <TextCus
          lightPrimaryColor
          caption1
          useI18n
          paramI18n={{
            date: formartDateTime(data?.created_at),
          }}>
          referral.created_at
        </TextCus>
        <ViewCus mb-12 mt-32 fd-row items-center justify-flex-start>
          <TextCus
            style={{ textTransform: 'capitalize' }}
            semibold
            whiteColor
            useI18n
            title3>
            {data?.title}
          </TextCus>
        </ViewCus>
        <TextCus lightPrimaryColor caption1 style={styles.textEvent}>
          {data?.description}
        </TextCus>
      </ViewCus>
    </MainLayout>
  );
};

export default NewDetail;

const styles = StyleSheet.create({
  bEvent: {
    width: width - 48,
    height: (width - 48) / 2,
    marginBottom: 10,
  },
  textEvent: {
    lineHeight: 18,
  },
});
