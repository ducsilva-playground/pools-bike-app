import { TextCus, ViewCus } from 'components';
import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { formatDBYMDHMS } from 'utils';

interface IEarningProps {
  list?: any[];
  isMember?: boolean;
  average?: {
    dailyAverage: number;
    monthlyAverage: number;
  } | null;
}

const Earning: FC<IEarningProps> = ({ list, isMember, average }) => {
  console.log('🚀 ~ file: Earning.tsx:16 ~ list:', list);
  const renderItem = ({ item }) => {
    return (
      <ViewCus bg-color23 br-12 h-86 w-120 items-center justify-center>
        <TextCus medium mb-16>
          {item?.time}
        </TextCus>
        <ViewCus
          w-96
          h-26
          py-4
          px-8
          br-12
          bg-color33
          items-center
          justify-center>
          {isMember ? (
            <TextCus
              medium
              color1E
              paramI18n={{
                members: item?.members,
              }}
              useI18n>
              home.members
            </TextCus>
          ) : (
            <TextCus
              medium
              color1E
              paramI18n={{
                points: item?.points,
              }}
              useI18n>
              home.available
            </TextCus>
          )}
        </ViewCus>
      </ViewCus>
    );
  };
  return (
    <ViewCus>
      <FlatList
        horizontal
        data={list}
        scrollEnabled
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <ViewCus w-12 />}
      />
      {isMember ? (
        <ViewCus mt-20>
          <ViewCus fd-row justify-space-between mb-8>
            <TextCus color78 useI18n>
              home.mem_level_2
            </TextCus>
            <TextCus color7E caption1>
              {formatDBYMDHMS(new Date().toDateString())}
            </TextCus>
          </ViewCus>
          <ViewCus fd-row justify-space-between>
            <TextCus useI18n>home.mem_level_3</TextCus>
            <TextCus color7E caption1>
              {formatDBYMDHMS(new Date().toDateString())}
            </TextCus>
          </ViewCus>
        </ViewCus>
      ) : (
        <ViewCus mt-20>
          <ViewCus fd-row justify-space-between mb-8>
            <TextCus useI18n>home.daily_average</TextCus>
            <TextCus
              color7E
              paramI18n={{
                points: average?.dailyAverage?.toFixed(2),
              }}
              caption1
              useI18n>
              home.available
            </TextCus>
          </ViewCus>
          <ViewCus fd-row justify-space-between>
            <TextCus useI18n>home.monthly_average</TextCus>
            <TextCus
              color7E
              paramI18n={{
                points: average?.monthlyAverage?.toFixed(2),
              }}
              caption1
              useI18n>
              home.available
            </TextCus>
          </ViewCus>
        </ViewCus>
      )}
    </ViewCus>
  );
};

export { Earning };
