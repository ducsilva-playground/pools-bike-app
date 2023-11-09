import { withStyle } from 'HOC';
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { IView } from 'types';

interface IProps extends IView {
  children: ReactNode;
}
const ViewCus: React.FC<IProps> = ({ children, ...rest }) => {
  return <View {...rest}>{children}</View>;
};
export default withStyle(ViewCus);
