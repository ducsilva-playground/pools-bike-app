import { HomeLayout, TextCus, ViewCus } from 'components';
import { useAuth } from 'hooks';
import React from 'react';
import { ScrollView } from 'react-native';
import { Balance, Banner } from './components';

const Home = () => {
  const { user } = useAuth();


  return (
    <HomeLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewCus p-24>
          <Banner />

          <ViewCus my-40 f-1>
            <TextCus useI18n >
              home.balance
            </TextCus>
          </ViewCus>
          <Balance />

        </ViewCus>
      </ScrollView>
    </HomeLayout>
  );
};
export default Home;
