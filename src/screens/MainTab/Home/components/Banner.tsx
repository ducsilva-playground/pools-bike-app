import { ImageCus, ViewCus } from 'components';
import React, { FC, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { genUrlImage, width } from 'utils';
import styles from '../styles';
import { useHome } from 'hooks';

interface IBannerProps {
  list?: any[];
}

type TBanner = {
  content: string;
  id: number;
  image: string;
  is_delete: boolean;
  link: string;
  title: string;
};

const Banner: FC<IBannerProps> = () => {
  const { onGetListBanner } = useHome();
  const [data, setData] = useState<TBanner[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const onLoadMore = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    onGetListBanner(page, res => {
      setData(res[0].items);
      setTotalPage(res[1].totalPage);
    });
  }, []);

  useEffect(() => {
    if (page !== 1) {
      onGetListBanner(page, res => {
        setData(pre => [...pre, ...res[0].items]);
      });
    }
  }, [page]);

  const renderItem = ({ item }: { item: TBanner }) => {
    return (
      <ViewCus
        bg-colorD9
        br-24
        h-150
        style={{
          width: width - 48,
        }}>
        <ImageCus source={genUrlImage(item?.image)} style={styles.banner} />
      </ViewCus>
    );
  };

  return (
    <FlatList
      horizontal
      data={data}
      scrollEnabled
      pagingEnabled
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      // ItemSeparatorComponent={() => <ViewCus w-6 />}
      onEndReached={onLoadMore}
    />
  );
};

export { Banner };
