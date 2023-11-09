import {
  ImageCus,
  Nodata,
  ParseHtmlCommon,
  TextCus,
  TouchCus,
  ViewCus,
} from 'components';
import React, { FC, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { INewsItem, TNews } from 'types';
import { FormatTimeNow, genUrlImage } from 'utils';
import styles from '../styles';
import { useHome } from 'hooks';
import { NavigationService, Routes } from 'navigation';

interface INewsProps {
  data?: any[];
}

const News: FC<INewsProps> = ({ data }) => {
  const renderItem = ({ item }: { item: TNews }) => {
    return (
      <TouchCus
        onPress={() =>
          NavigationService.navigate(Routes.NewDetail, { data: item })
        }>
        <ViewCus h-90 py-12 fd-row items-center justify-space-between>
          <ViewCus w-80 h-90 bg-colorD9 br-12 mr-12>
            <ImageCus
              source={genUrlImage(item?.thumbnail)}
              style={styles.thumbnail}
            />
          </ViewCus>
          <ViewCus f-1>
            <TextCus mb-4>{item?.title}</TextCus>
            <TextCus
              mb-4
              colorB1
              overline
              numberOfLines={3}
              style={{ lineHeight: 14 }}>
              {item?.description}
              {/* <ParseHtmlCommon html={item?.content} /> */}
            </TextCus>
            <TextCus color7E overline>
              {item?.created_at && FormatTimeNow(item?.created_at)}
            </TextCus>
          </ViewCus>
        </ViewCus>
      </TouchCus>
    );
  };
  return data?.length > 0 ? (
    <FlatList
      numColumns={1}
      data={data}
      scrollEnabled
      pagingEnabled
      scrollEventThrottle={1}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <ViewCus h-12 />}
    />
  ) : (
    <Nodata title="No news to display" />
  );
};

export { News };
