import { LoadingGlobal, TextCus, TouchCus, ViewCus } from 'components';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { Colors } from 'theme';
import { FontWeight } from 'theme/typography';
import { FILTER_BY_TIME, IFilter, sleep } from 'utils';
import styles from './styles';

interface IFilterCommon {
  data?: IFilter[];
  onPress?: (item: IFilter) => void;
  selected?: IFilter;
  title?: string;
  width?: number;
}

export function FilterCommon(props: IFilterCommon) {
  const {
    data = FILTER_BY_TIME,
    selected = FILTER_BY_TIME[0],
    onPress,
    title = '',
    width,
  } = props;

  const _onPress = useCallback(
    (it, fn) => {
      LoadingGlobal(true);
      sleep(500).then(() => {
        fn?.(it);
        LoadingGlobal(false);
      });
    },
    [selected],
  );

  const renderItem = ({ item }) => (
    <TouchCus
      onPress={() => _onPress(item, onPress)}
      style={[
        selected?.id === item?.id
          ? { ...styles.btnSelected }
          : { ...styles.btn },
        width && { width },
      ]}>
      <TextCus
        colorB1
        body2
        style={
          selected?.id === item?.id && {
            color: Colors.white,
            fontWeight: FontWeight.medium,
          }
        }
        useI18n>
        {item?.title}
      </TextCus>
    </TouchCus>
  );

  return (
    <ViewCus>
      {title && (
        <TextCus useI18n colorB1 medium mb-10>
          {title}
        </TextCus>
      )}
      <FlatList
        horizontal
        data={data}
        scrollEnabled
        // pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <ViewCus w-9 />}
      />
    </ViewCus>
  );
}
