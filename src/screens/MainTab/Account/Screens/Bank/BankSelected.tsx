import { IconNames } from 'assets';
// import Icon from 'assets/svg/Icon';
import {
  HomeLayout,
  IconCus,
  ScrollViewCus,
  TextCus,
  TouchCus,
  ViewCus,
} from 'components';
import { useHome } from 'hooks';
import { NavigationService, Routes } from 'navigation';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'theme';
import { bankList, getHeight } from 'utils';
import styles from './styles';

const BankSelected = () => {
  const { listBank, onBank } = useHome();
  const [banks, setBanks] = useState([]);
  const headerProps = {
    renderLeft: () => (
      <IconCus name={IconNames.CHEVRON_LEFT} size={18} color={Colors.white} />
    ),
    renderCenter: () => (
      <ViewCus>
        <TextCus title4 medium whiteColor>
          Chọn ngân hàng
        </TextCus>
      </ViewCus>
    ),
  };
  useEffect(() => {
    onBank();
  }, []);
  useEffect(() => {
    setBanks(listBank);
  }, [listBank]);

  const renderBanks = (item: any) => (
    <>
      <TouchCus
        onPress={() => {
          NavigationService.navigate(Routes.BankAddDetail, item);
        }}>
        <ViewCus p-20 pl-0 key={item?.id}>
          <TextCus body1>{item.short_name}</TextCus>
        </ViewCus>
      </TouchCus>
      <Divider style={getHeight(1)} />
    </>
  );
  return (
    <HomeLayout
      bgColor={Colors.main}
      statusBarMode={'dark-content'}
      safeAreaEdges={['left', 'top', 'right']}
      header={{ ...headerProps }}>
      <ScrollViewCus>
        <ViewCus style={styles.container}>
          {/* <ViewCus px-16>
            <TextInputs
              style={styles.input}
              placeholder={'Tìm kiếm'}
              leftIcon={
                <ViewCus pr-10>{Icon.Search({ color: Colors.border })}</ViewCus>
              }
              success
            />
          </ViewCus> */}
          <ViewCus px-16>
            <ViewCus fd-row items-center justify-space-between>
              <TextCus body1 bold>
                Ngân hàng phổ biến
              </TextCus>
            </ViewCus>
            <ViewCus fd-row fw-wrap justify-space-between mt-24>
              {bankList?.map(e => {
                return (
                  <ViewCus items-center key={e.id} mb-24>
                    <TouchCus
                      items-center
                      onPress={() => {
                        NavigationService.navigate(Routes.BankAddDetail, e);
                      }}>
                      <ViewCus
                        items-center
                        justify-center
                        style={[styles.btnIcon, styles.wrapBtnIcon]}
                        br-16>
                        {e.icon}
                        <TextCus caption1 textAlign={'center'} mt-8>
                          {e.name}
                        </TextCus>
                      </ViewCus>
                    </TouchCus>
                  </ViewCus>
                );
              })}
            </ViewCus>

            <TextCus body1 bold>
              Toàn bộ ngân hàng
            </TextCus>
            <SafeAreaView>
              <FlatList
                data={banks}
                scrollEnabled={true}
                showsVerticalScrollIndicator={true}
                keyExtractor={(_, index) => index.toString()}
                // numColumns={3}
                renderItem={({ item, index }) => renderBanks(item, index)}
              />
            </SafeAreaView>
          </ViewCus>
        </ViewCus>
      </ScrollViewCus>
    </HomeLayout>
  );
};

export default BankSelected;
