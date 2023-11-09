import { ViewCus } from 'components/ViewCus';
import React, { createRef, useImperativeHandle, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from 'theme';

const refLoading = createRef<any>();

export const LoadingGlobal = (status: boolean) => {
  refLoading?.current?.loading?.(status);
};

export const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useImperativeHandle(
    refLoading,
    () => ({
      loading: (status: boolean) => {
        setIsLoading(status);
      },
    }),
    [],
  );

  if (!isLoading) {
    return null;
  }

  return (
    <ViewCus style={styles.container}>
      <ActivityIndicator size="large" color={Colors.color1A} />
    </ViewCus>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.418)',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  loadingText: {
    color: Colors.main,
  },
});
