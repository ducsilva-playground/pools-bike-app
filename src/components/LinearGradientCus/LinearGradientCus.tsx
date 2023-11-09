import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import { Colors } from 'theme';
import { withOpacity } from 'utils';
interface Props {
  children: React.ReactNode;
  linear?: LinearGradientProps;
  styleLinear?: StyleProp<ViewStyle>;
  colors?: (string | number)[];
}
const LinearGradientCus: React.FC<Props> = ({
  children,
  linear,
  styleLinear,
  colors,
}) => {
  return (
    <LinearGradient
      start={{ x: 1, y: 0.5 }}
      end={{ x: 0.8, y: 1 }}
      locations={[0, 1]}
      {...linear}
      colors={
        colors ?? [withOpacity(Colors.dark, 0.2), withOpacity(Colors.dark, 0.2)]
      }
      style={[styleLinear]}>
      {children}
    </LinearGradient>
  );
};
export default LinearGradientCus;
