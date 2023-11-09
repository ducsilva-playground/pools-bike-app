import React from 'react';
import styles from './styles';
import { ImageCus, TextCus, TouchCus, ViewCus } from 'components';
import { Images } from 'assets';
import { getWidthBySpace, showImgSrc, styleSpacing } from 'utils';
import { useAuth } from 'hooks';
import { List } from 'react-native-paper';
import { NavigationService, Routes } from 'navigation';

const AccountManagement = () => {
  const { profile } = useAuth();
  return (
    <ViewCus px-16>
      <ViewCus bg-white br-12 px-16 mt-16>
        <List.Item
          title={
            <TextCus fontWeight={100}>
              {profile?.full_name ?? 'Trần Tuệ Lâm'}
            </TextCus>
          }
          descriptionStyle={styleSpacing('pt-10')}
          description={
            <ViewCus fd-row items-center pt-10>
              <TouchCus
                onPress={() => {
                  NavigationService.navigate(Routes.Profile);
                }}>
                <ViewCus fd-row items-center>
                  <TextCus secondBtn medium mr-6>
                    Xem và chỉnh sửa thông tin
                  </TextCus>

                </ViewCus>
              </TouchCus>
            </ViewCus>
          }
          style={[getWidthBySpace(64), styleSpacing('pr-0')]}
          left={() => (
            <ImageCus
              source={showImgSrc('', profile?.avatar, Images.driver)}
              style={styles.wrapImg}
            />
          )}
        />
      </ViewCus>
    </ViewCus>
  );
};

export default AccountManagement;
