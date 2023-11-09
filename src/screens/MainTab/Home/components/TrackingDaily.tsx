import { ImageCus, Nodata, TextCus, TouchCus, ViewCus } from 'components';
import React, { FC } from 'react';
import { FlatList, Linking } from 'react-native';
import { Colors } from 'theme';
import styles from '../styles';
import { useAuth, useHome } from 'hooks';
import { API_HOST } from '@env';
console.log('🚀 ~ file: TrackingDaily.tsx:9 ~ API_HOST:', API_HOST);

interface ITrackingDailyProps {
  data: any[];
  isDaily?: boolean;
  getRealTimeStatistics?: () => void;
}

const TrackingDaily: FC<ITrackingDailyProps> = ({
  data,
  isDaily = false,
  getRealTimeStatistics,
}) => {
  const { user } = useAuth();

  const renderItem = ({ item }) => {
    return (
      <ViewCus
        bg-color11
        br-12
        h-56
        p-12
        fd-row
        items-center
        justify-space-between>
        <ViewCus mr-20 items-center f-1 fd-row>
          <ViewCus items-center justify-center style={styles.phone} mr-12>
            <ImageCus
              source={{
                uri:
                  API_HOST +
                    'images/' +
                    (item?.icon || item?.app_service?.icon) ||
                  'https://dashboard-api-dev.poolsmobility.com/' +
                    'images/' +
                    (item?.icon || item?.app_service?.icon),
              }}
              style={styles.iconApp}
            />
          </ViewCus>
          <TextCus whiteColor>{item?.name || item?.app_service?.name}</TextCus>
        </ViewCus>
        <ViewCus>
          {isDaily ? (
            <TouchCus
              style={[
                styles.claimBtn,
                !item?.isClaim
                  ? {
                      backgroundColor:
                        item?.name === 'Pools Screen' ||
                        item?.name === 'Pools Party'
                          ? Colors.color00C
                          : Colors.color1A,
                    }
                  : { backgroundColor: Colors.color33 },
              ]}
              onPress={() => {
                if (!item?.isClaim) {
                  // onClaimApp(item?.id, +item?.formula, () => {
                  //   getRealTimeStatistics?.();
                  // });
                  console.log(
                    '🚀 ~ file: TrackingDaily.tsx:69 ~ renderItem ~ user:',
                    user,
                  );
                  if (item?.name === 'Pools Screen') {
                    Linking.openURL(
                      `poolsscreen://Home?email=${user?.email}&app_service_id=${item?.id}&point=${item?.formula}`,
                    );
                  } else if (item?.name === 'Pools Party') {
                    Linking.openURL(
                      `poolsparty://Home?email=${user?.email}&app_service_id=${item?.id}&point=${item?.formula}`,
                    );
                  }
                }
              }}>
              <TextCus
                style={item?.isClaim && { color: Colors.colorB1 }}
                medium
                useI18n>
                {!item?.isClaim ? 'home.open' : 'home.claimed'}
              </TextCus>
            </TouchCus>
          ) : (
            <ViewCus
              w-96
              h-26
              py-4
              px-8
              br-12
              bg-color33
              items-center
              justify-center>
              <TextCus
                medium
                color1E
                paramI18n={{
                  points: item?.pointTotals,
                }}
                useI18n>
                home.available
              </TextCus>
            </ViewCus>
          )}
        </ViewCus>
      </ViewCus>
    );
  };
  return data?.length > 0 ? (
    <FlatList
      numColumns={1}
      data={data}
      scrollEnabled={false}
      nestedScrollEnabled
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <ViewCus h-12 />}
    />
  ) : (
    <Nodata title="No apps to display" />
  );
};

export { TrackingDaily };
