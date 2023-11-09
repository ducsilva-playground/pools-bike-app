import { Header, MainLayout, TextCus, TouchCus, ViewCus } from 'components';
import { useKey } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator } from 'react-native';
import { Colors } from 'theme';
import { STORE_LANGUAGE_KEY } from 'utils/services/languageDetectorPlugin';
import styles from './styles';
const featureList = [
  {
    key: 1,
    // icon: CouponSvg.flagEnglish(),
    name: 'English',
    code: 'en',
  },
  {
    key: 2,
    // icon: CouponSvg.flagThailand(),
    name: 'Thailand',
    code: 'th',
  },
  {
    key: 3,
    // icon: CouponSvg.flagKorea(),
    name: 'Korean',
    code: 'ko',
  },
  // {
  //   key: 4,
  //   icon: CouponSvg.flagVietnam(),
  //   name: 'Vietnamese',
  //   code: 'vi',
  // },
];
export default function SettingLang() {
  const [language, setLanguage] = useState('English');
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { saveKeyStore, getKeyStore } = useKey();

  const getLanguage = async () => {
    try {
      const lang = await getKeyStore(STORE_LANGUAGE_KEY);
      lang && setLanguage(lang);
    } catch (error) {
      console.warn('ERR LANGUAGE', error);
    }
  };

  useEffect(() => {
    getLanguage();
  }, [language]);

  const hanldeChangeLanguage = async item => {
    setLoading(true);
    try {
      await i18n.changeLanguage(item.code);
      await saveKeyStore(STORE_LANGUAGE_KEY, item.code);
      setLanguage(item.name);
      setLoading(false);
    } catch (error) {
      console.warn('Warning', error);
      setLoading(false);
    }
  };

  return (
    <MainLayout style={styles.container}>
      <ViewCus f-1>
        <Header
          style={{ backgroundColor: Colors.white }}
          showCenter={true}
          renderCenter={() => (
            <ViewCus items-center>
              <TextCus style={styles.headerText} useI18n>
                myPage.setting_language
              </TextCus>
            </ViewCus>
          )}
        />
        <ViewCus style={styles.content}>
          {featureList.map(item => {
            return (
              <TouchCus
                key={`lang-${item.key}`}
                onPress={() => hanldeChangeLanguage(item)}>
                <ViewCus
                  style={[
                    styles.border,
                    {
                      backgroundColor:
                        language === item.code
                          ? Colors.borderLang
                          : Colors.white,
                    },
                  ]}
                  py-15
                  justify-center
                  fd-row
                  d-flex
                  justify-space-between
                  items-center
                  px-20>
                  <ViewCus d-flex fd-row items-center>
                    {item.icon}
                    <TextCus ml-12 style={styles.langText}>
                      {item.name}
                    </TextCus>
                  </ViewCus>

                  {language === item.code && CouponSvg.checkedLang()}
                </ViewCus>
              </TouchCus>
            );
          })}
          <ViewCus mt-20>
            {loading && <ActivityIndicator size="large" color={Colors.main} />}
          </ViewCus>
        </ViewCus>
      </ViewCus>
    </MainLayout>
  );
}
