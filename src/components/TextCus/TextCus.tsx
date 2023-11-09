import { withStyle } from 'HOC';
import React, { ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextStyle } from 'react-native';
import { DefaultFont } from 'theme/typography';

function TextCus(props: ITexts) {
  const { t } = useTranslation();
  const {
    useI18n = false,
    paramI18n,
    children,
    fontFamily = DefaultFont,
    ...rest
  } = props;

  return (
    <Text  {...rest}>
      {useI18n ? t(`${children}`, paramI18n) : children ?? ''}
    </Text>
  );
}

export default memo(withStyle(TextCus));

export interface ITexts extends TextStyle {
  useI18n?: boolean;
  paramI18n?: any;
  children?: ReactNode;
  style?: any
}
