import { SafeAreaStatusBar, SafeAreaViewCus } from 'components';
import React from 'react';
import { Colors } from 'theme';
import HeadInfo from './HeadInfo';

const HomeLayout = (props: IHomeLayoutProps) => {
  const { children, hasEvent = false, event, isNews, isNoti } = props;
  return (
    <SafeAreaViewCus bgColor={Colors.backgroundMain}>
      <>
        <SafeAreaStatusBar />
        <HeadInfo
          hasEvent={hasEvent}
          event={event}
          isNews={isNews}
          isNoti={isNoti}
        />
        {children}
      </>
    </SafeAreaViewCus>
  );
};

export default HomeLayout;

export interface IHomeLayoutProps {
  children?: React.ReactNode;
  hasEvent?: boolean;
  event?: IEvent;
  isNoti?: boolean;
  isNews?: boolean;
}

export interface IEvent {
  endtime?: number;
  title?: string;
}
