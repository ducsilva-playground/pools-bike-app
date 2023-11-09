import React from 'react';
import { FlatList } from 'react-native';
import { ICardProfile, IDataCard } from 'types';
import { TouchCus, TextCus, ViewCus, IconCus } from 'components';
import { getHeight, getWidthBySpace } from 'utils';
import styles from './styles';
import { Divider } from 'react-native-paper';
import { IconNames } from 'assets';
import { Colors } from 'theme';

const CardItem = ({
  data = [],
  iconLeft,
  iconRight,
  rightStyle,
  disabled,
}: ICardProfile) => {
  const itemDivider = () => {
    return <Divider style={[getHeight(1), styles.divider]} />;
  };
  const renderItem = (item: IDataCard, index) => {
    return (
      <ViewCus px-16 style={getWidthBySpace(28)}>
        <TouchCus disabled={disabled} onPress={() => item?.onPress?.()}>
          <ViewCus justify-space-between items-center fd-row>
            <ViewCus py-14 items-center fd-row>
              {iconLeft && <ViewCus mr-12>{item?.icon}</ViewCus>}
              <TextCus medium body2>
                {item?.title}
              </TextCus>
            </ViewCus>
            <ViewCus fd-row items-center justify-flex-end f-1>
              {item?.textRight && (
                <TextCus
                  p-6
                  errorColor={rightStyle?.errorColor}
                  bold={rightStyle?.bold}
                  textAlign={'right'}>
                  {item.textRight}
                </TextCus>
              )}
              {iconRight && (
                <IconCus
                  name={IconNames.CHEVRON_RIGHT}
                  size={18}
                  color={Colors.border}
                />
              )}
            </ViewCus>
          </ViewCus>
        </TouchCus>
        {index < data?.length - 1 && itemDivider()}
      </ViewCus>
    );
  };

  return (
    <ViewCus mt-8 bg-white br-12>
      <FlatList
        data={data}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        // ItemSeparatorComponent={itemDivider}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
    </ViewCus>
  );
};

export default CardItem;
