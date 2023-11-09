import { Images } from 'assets';
import SvgIcon from 'assets/IconSVG';
import { ImageCus, TextCus, TouchCus, ViewCus } from 'components';
import moment from 'moment';
import React from 'react';
import { IHomeLayoutProps } from './HomeLayout';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from 'store/home';
import { NavigationService, Routes } from 'navigation';
import { useAuth } from 'hooks';
import { API_HOST } from '@env';
import { isValidURL } from 'utils';
export default function HeadInfo({
  hasEvent,
  event = { endtime: 10, title: 'Lorem' },
  isNews = false,
  isNoti = false,
}: IHomeLayoutProps) {
  const dispatch = useDispatch();
  const isOpenMenu = useSelector((state: any) => state.home.isOpenMenu);
  const { user } = useAuth();

  return (
    <ViewCus h-50 justify-space-between items-center fd-row px-24>
      <ViewCus
        style={{
          flex: hasEvent ? 2 : 3,
        }}
        pos-relative>
        <TouchCus onPress={() => dispatch(toggleMenu(!isOpenMenu))}>
          <SvgIcon.Menu />
        </TouchCus>
        {false && <ViewCus style={styles.notiNew} />}
      </ViewCus>

      <ViewCus
        items-center
        fd-row
        style={{
          flex: hasEvent ? 3 : 1,
        }}>
        {hasEvent ? (
          <ViewCus f-1 py-2 items-center justify-center mr-16 bg-support br-50>
            <TextCus whiteColor>{event?.title}</TextCus>
            <TextCus whiteColor>
              {event?.endtime &&
                moment.utc(event?.endtime * 1000).format('HH:mm:ss')}
              17:20
            </TextCus>
          </ViewCus>
        ) : (
          <ViewCus f-2 />
        )}
        <ViewCus fd-row items-center justify-flex-end>
          <TouchCus onPress={() => {}}>
            <ViewCus mr-16 pos-relative>
              <SvgIcon.Ring />
              {false && <ViewCus style={styles.notiNew} />}
            </ViewCus>
          </TouchCus>
          <TouchCus onPress={() => NavigationService.navigate(Routes.Profile)}>
            <ImageCus
              source={
                user?.avatar
                  ? isValidURL(user.avatar)
                    ? { uri: user?.avatar }
                    : { uri: API_HOST + 'images/' + user.avatar }
                  : Images.default_avatar
              }
              resizeMode={'contain'}
              style={styles.avatar}
            />
          </TouchCus>
        </ViewCus>
      </ViewCus>
    </ViewCus>
  );
}
