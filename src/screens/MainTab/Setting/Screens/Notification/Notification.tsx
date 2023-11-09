import { HomeLayout, TextCus, ViewCus } from 'components';
import { useReel } from 'hooks';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Colors } from 'theme';
import { FormatTimeNow, width } from 'utils';
import styles from './styles';

const CouponNotification = ({ itemNoti }) => {
  return (
    <ViewCus
      style={[
        itemNoti?.isSeen === 0
          ? styles.unReadNotiContainer
          : styles.readNotiContainer,
        {
          width,
          padding: 5,
        },
      ]}>
      <ViewCus style={styles.notiContainer}>
        <ViewCus>
          <ViewCus style={styles.notiInfoContainer}>
            <TextCus style={styles.blueText} numberOfLines={2}>
              {itemNoti?.notification?.title}
            </TextCus>
            <TextCus
              style={styles.blueText}>{`(${itemNoti?.customerId})`}</TextCus>
            {/* <TextCus style={styles.textBlack}>has been redeemed</TextCus> */}
          </ViewCus>

          <TextCus style={styles.timeText}>
            {FormatTimeNow(itemNoti?.createdAt)}
          </TextCus>
        </ViewCus>
      </ViewCus>
    </ViewCus>
  );
};

// const ReviewNotification = ({ username, isRead }) => {
//   return (
//     <ViewCus
//       style={isRead ? styles.readNotiContainer : styles.unReadNotiContainer}>
//       <ViewCus style={styles.notiContainer}>
//         <ViewCus>{NotiSvg.review()}</ViewCus>
//         <ViewCus>
//           <ViewCus style={styles.notiInfoContainer}>
//             <TextCus style={styles.textBlack}>You have new review from</TextCus>
//             <TextCus style={styles.blueText}>{username}</TextCus>
//           </ViewCus>

//           <TextCus style={styles.timeText}>3 minutes ago</TextCus>
//         </ViewCus>
//       </ViewCus>
//     </ViewCus>
//   );
// };
// const RateNotification = ({ username, isRead }) => {
//   return (
//     <ViewCus
//       style={isRead ? styles.readNotiContainer : styles.unReadNotiContainer}>
//       <ViewCus style={styles.notiContainer}>
//         <ViewCus>{NotiSvg.rate()}</ViewCus>
//         <ViewCus>
//           <ViewCus style={styles.notiInfoContainer}>
//             <TextCus>You have new rate from </TextCus>
//             <TextCus style={styles.blueText}>{username}</TextCus>
//           </ViewCus>

//           <TextCus style={styles.timeText}>3 minutes ago</TextCus>
//         </ViewCus>
//       </ViewCus>
//     </ViewCus>
//   );
// };
// const NotificationItem = ({ type }) => {
//   return <ViewCus>rate</ViewCus>;
// };

export default function Notification() {
  const [action, setAction] = React.useState('notification');
  const { onGetNotiStore } = useReel();
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState<any[]>([]);

  const onLoadMore = () => {
    if (page < Number(totalPage)) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    onGetNotiStore({
      page: 1,
      callback: res => {
        setData(res?.data?.data);
        setTotalPage(res.data?.pagination?.totalPages);
      },
    });
  }, []);

  useEffect(() => {
    if (page && page !== 1) {
      onGetNotiStore({
        page,
        callback: res => {
          setData(prev => [...prev, ...res?.data?.data]);
        },
      });
    }
  }, [page]);

  const optAction = { action, setAction };
  return (
    <HomeLayout bgColor={Colors.white} header {...optAction}>
      <ViewCus style={styles.markAllReadContainer}>
        {/* <TextCus style={styles.markAllReadText}>Mark all as read</TextCus> */}
      </ViewCus>

      <ViewCus pb-50>
        <TextCus px-24 mb-12 body1>
          Last 7 days
        </TextCus>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          onEndReached={onLoadMore}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 100,
          }}
          renderItem={({ item }) => <CouponNotification itemNoti={item} />}
        />

        {/* <CouponNotification
          isRead={true}
          couponName={'Coupon name'}
          couponId={'1238754'}
        /> */}
        {/* <ReviewNotification isRead={true} username={'User name'} />
        <RateNotification username={'user name'} isRead={false} /> */}
      </ViewCus>
    </HomeLayout>
  );
}
