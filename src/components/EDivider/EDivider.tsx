import { isEqual } from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { Colors } from 'theme';

interface Props {
  height?: number;
  width?: number;
  backgroundColor?: string;
}

export const EDivider = React.memo(
  ({ height = 1, width = 100, backgroundColor = Colors.color85 }: Props) => {
    return <View style={{ height, width, backgroundColor }} />;
  },
  (prev, next) => isEqual(prev, next),
);
