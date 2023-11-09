import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_ENDPOINT, EnumSettingDoc } from 'utils';
import * as HomeActions from 'store/home';
import { HomeSelectors } from 'store/home';
import { useNotify } from './useNotify';
import { useTranslation } from 'react-i18next';
import { LoadingGlobal } from 'components';
import { getRequest } from 'utils/services/fetch';
import { UserSelectors } from 'store/user';
import { useQuery } from '@tanstack/react-query';

export const useHome = () => {
  const dispatch = useDispatch();
  const news = useSelector(HomeSelectors.getAttrByKey('news')) || null;
  const events = useSelector(HomeSelectors.getAttrByKey('events')) || null;
  const wallets = useSelector(HomeSelectors.getAttrByKey('wallets')) || null;
  const account = useSelector(HomeSelectors.getAttrByKey('account')) || null;
  const user = useSelector(UserSelectors.getAttrByKey('user')) || null;
  const appServices =
    useSelector(HomeSelectors.getAttrByKey('appServices')) || null;
  const servicesEarn =
    useSelector(HomeSelectors.getAttrByKey('servicesEarn')) || null;
  const { danger, success } = useNotify();
  const { t } = useTranslation();
  const loading = useSelector(HomeSelectors.getLoading);

  // ------ REALTIME SOCK KET ------

  // ------ REALTIME SOCK KET ------

  const onGetListBanner = useCallback(
    (page: number, callback: (data) => void, limit = 3) => {
      dispatch(
        HomeActions.getBaseActionsRequest(
          {
            endPoint: `${API_ENDPOINT.GET_LIST_BANNER}?limit=${limit}&page=${page}`,
          },
          res => {
            if (res?.status === 200) {
              callback?.(res?.data);
            }
          },
        ),
      );
    },
    [dispatch],
  );
  const onGetListEvent = useCallback(
    (page: number, limit = 3, callback?: (data) => void) => {
      dispatch(
        HomeActions.getBaseActionsRequest(
          {
            dataKey: 'events',
            endPoint: `${API_ENDPOINT.GET_LIST_EVENT}?limit=${limit}&page=${page}`,
          },
          res => {
            if (res?.status === 200) {
              callback?.(res?.data);
            }
          },
        ),
      );
    },
    [dispatch],
  );

  const onGetListNews = async (page: number, limit = 5, callback?: any) => {
    const res = await getRequest({
      endPoint: `${API_ENDPOINT.GET_LIST_NEWS}?limit=${limit}&page=${page}`,
    });
    if (res?.status === 200) {
      callback?.(res?.data);
      return res?.data;
    }
  };
  const queryNews = async (page?: number, limit?: number, callback?: any) => {
    try {
      const res = await getRequest({
        endPoint: `${API_ENDPOINT.GET_LIST_NEWS}?limit=${limit}&page=${page}`,
      });
      console.log('🚀 ~ file: useHome.ts:83 ~ queryNews ~ res:', res);

      if (res?.status === 200) {
        const data = {
          items: [...res?.data?.[0]?.items],
          totalPage: res?.data?.[1]?.totalPage,
        };
        return data;
      }
      return [];
    } catch (e) {
      console.log(e);
    }
  };

  // const onGetListApp = useCallback(
  //   (page: number, callback?: (data) => void, limit = 12) => {
  //     dispatch(
  //       HomeActions.getBaseActionsRequest(
  //         {
  //           dataKey: 'appServices',
  //           endPoint: `${API_ENDPOINT.GET_LIST_APP}?limit=${limit}&page=${page}`,
  //         },
  //         res => {
  //           if (res?.status === 200) {
  //             callback?.(res?.data);
  //           }
  //         },
  //       ),
  //     );
  //   },
  //   [dispatch],
  // );
  const onGetListApp = async (page: number, limit = 20, callback?: any) => {
    try {
      const res = await getRequest({
        endPoint: `${API_ENDPOINT.GET_LIST_APP}?limit=${limit}&page=${page}`,
      });
      console.log('🚀 ~ file: useHome.ts:139 ~ onGetListApp ~ res:', res);

      if (res?.status === 200) {
        const data = {
          items: [...res?.data?.[0]?.items],
          totalPage: res?.data?.[1]?.totalPage,
        };
        dispatch(HomeActions.getDataSuccess({ appServices: data.items }));
        return data;
      }
      return [];
    } catch (e) {
      console.log(e);
    }
  };
  // const onGetListWallet = useCallback(
  //   (page: number, limit = 20, callback?: (data) => void) => {
  //     dispatch(
  //       HomeActions.getBaseActionsRequest(
  //         {
  //           dataKey: 'wallets',
  //           endPoint: `${API_ENDPOINT.GET_LIST_WALLET}?limit=${limit}&page=${page}`,
  //         },
  //         res => {
  //           if (res?.status === 200) {
  //             callback?.(res?.data);
  //           }
  //         },
  //       ),
  //     );
  //   },
  //   [dispatch],
  // );

  const onGetListWallet = async (page = 1, limit = 20, callback?: any) => {
    try {
      const res = await getRequest({
        endPoint: `${API_ENDPOINT.GET_LIST_WALLET}?limit=${limit}&page=${page}`,
      });
      console.log('🚀 ~ file: useHome.ts:139 ~ onGetListWal ~ res:', res);

      if (res?.status === 200) {
        const data = {
          items: [...res?.data?.[0]?.items],
          totalPage: res?.data?.[1]?.totalPage,
        };
        dispatch(HomeActions.getDataSuccess({ wallets: data.items }));
        return data;
      }
      return [];
    } catch (e) {
      console.log(e);
    }
  };
  const queryListWallet = () => {
    return useQuery({
      queryKey: ['wallets'],
      queryFn: () => onGetListWallet(1),
    });
  };

  const onGetListEarnService = useCallback(
    (page: number, limit = 6, callback?: (data) => void) => {
      dispatch(
        HomeActions.getBaseActionsRequest(
          {
            dataKey: 'servicesEarn',
            endPoint: `${API_ENDPOINT.GET_LIST_EARN_SERVICE}?limit=${limit}&page=${page}`,
          },
          res => {
            if (res?.status === 200) {
              callback?.(res?.data);
            }
          },
        ),
      );
    },
    [dispatch],
  );
  const queryListEarnServiceByDuration = async (
    page?: number,
    limit?: number,
    duration?: number,
    orderBy?: string,
    callback?: any,
  ) => {
    try {
      const res = await getRequest({
        endPoint: `${API_ENDPOINT.GET_LIST_EARN_SERVICE_DURATION}${duration}&limit=${limit}&page=${page}&orderBy=${orderBy}`,
      });
      console.log('🚀 ~ file: useHome.ts:161 ~ useHome ~ res:', res);

      if (res?.status === 200) {
        const data = {
          items: [...res?.data?.[0]?.items],
          totalPage: res?.data?.[1]?.totalPage,
        };
        return data;
      }
      return [];
    } catch (e) {
      console.log(e);
    }
  };

  const onGetChartEarnService = useCallback(
    (duration: number, callback?: (data) => void) => {
      LoadingGlobal(true);
      dispatch(
        HomeActions.getBaseActionsRequest(
          {
            endPoint: `${API_ENDPOINT.GET_CHART_EARN + duration}`,
          },
          res => {
            if (res?.status === 200) {
              callback?.(res?.data);
              LoadingGlobal(false);
            }
            LoadingGlobal(false);
          },
        ),
      );
    },
    [dispatch],
  );
  const queryChartEarnService = async (duration: number, callback?: any) => {
    try {
      LoadingGlobal(true);
      const res = await getRequest({
        endPoint: `${API_ENDPOINT.GET_CHART_EARN + duration}`,
      });
      console.log('🚀 ~ file: useHome.ts:161 ~ useHome ~ res:', res);

      if (res?.status === 200) {
        callback?.(res?.data);
        LoadingGlobal(false);
        return res?.data;
      }
    } catch (e) {
      console.log(e);
    }
  };

  // const onClaimApp = useCallback(
  //   async (app_service_id: string, point: number, callback?: () => void) => {
  //     LoadingGlobal(true);
  //     try {
  //       dispatch(
  //         HomeActions.postBaseActionsRequest(
  //           {
  //             formData: {
  //               app_service_id,
  //               point,
  //             },
  //             endPoint: API_ENDPOINT.CLAIM_APP,
  //           },
  //           res => {
  //             if (res.status === 200) {
  //               onGetListApp(1);
  //               onGetListEarnService(1, 10);
  //               success(t('notify.success'), res.message);
  //               LoadingGlobal(false);
  //               callback?.();
  //             } else {
  //               danger(t('notify.error'), res.message);
  //               LoadingGlobal(false);
  //             }
  //           },
  //         ),
  //       );
  //     } catch (error: any) {
  //       danger(t('error'), `${error?.message}`);
  //       LoadingGlobal(false);
  //     }
  //   },
  //   [danger, success],
  // );

  const onGetTopListEarnThisMonth = async (callback?: any) => {
    try {
      const res = await getRequest({
        endPoint: `${API_ENDPOINT.GET_TOP_EARN}`,
      });
      if (res?.status === 200) {
        callback?.(res?.data);
        return res?.data;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onGetStatisticsEarning = async (
    page: number,
    limit = 5,
    callback?: any,
  ) => {
    try {
      const res = await getRequest({
        endPoint: `${API_ENDPOINT.GET_STATISTIC_EARN}?limit=${limit}&page=${page}`,
      });
      if (res?.status === 200) {
        callback?.(res?.data);
        return res?.data;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onGetDetailEarnService = useCallback(
    (
      id: string,
      page: number,
      duration: number,
      callback?: (data) => void,
      limit = 20,
    ) => {
      dispatch(
        HomeActions.getBaseActionsRequest(
          {
            endPoint: `${API_ENDPOINT.GET_DETAIL_EARN_SERVICE}?id=${id}&page=${page}&limit=${limit}&duration=${duration}`,
          },
          res => {
            if (res?.status === 200) {
              callback?.(res?.data);
            }
          },
        ),
      );
    },
    [dispatch],
  );

  // const onGetExchangeRate = useCallback(
  //   (callback?: (data) => void) => {
  //     console.log('🚀 ~ file: useHome.ts:258 ~ useHome ~ data:');
  //     dispatch(
  //       HomeActions.getBaseActionsRequest(
  //         {
  //           dataKey: 'account',
  //           endPoint: `${API_ENDPOINT.GET_EXCHANGE_RATE}`,
  //         },
  //         res => {
  //           console.log('🚀 ~ file: useHome.ts:265 ~ useHome ~ res:', res);
  //           if (res?.status === 200) {
  //             callback?.(res?.data);
  //           }
  //         },
  //       ),
  //     );
  //   },
  //   [dispatch],
  // );

  const onGetExchangeRate = async (callback?: any) => {
    try {
      const res = await getRequest({
        endPoint: `${API_ENDPOINT.GET_EXCHANGE_RATE}`,
      });
      if (res?.status === 200) {
        dispatch(HomeActions.getDataSuccess({ account: res?.data }));
        callback?.(res?.data);
        return res?.data;
      }
    } catch (e) {
      console.log(e);
    }
  };
  const queryExchangeRate = () => {
    return useQuery({
      queryKey: ['exchangeRate'],
      queryFn: () => onGetExchangeRate(),
    });
  };
  const onGetChartToken = async (duration: number, callback?: any) => {
    try {
      LoadingGlobal(true);
      const res = await getRequest({
        endPoint: `${API_ENDPOINT.GET_CHART_HOME + duration}`,
      });
      if (res?.status === 200) {
        callback?.(res?.data);
        LoadingGlobal(false);
        return res?.data;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onGetDocSetting = useCallback(
    (type: EnumSettingDoc, callback?: (data) => void) => {
      dispatch(
        HomeActions.getBaseActionsRequest(
          {
            endPoint: `${API_ENDPOINT.SETTING_DOC + type}`,
          },
          res => {
            if (res?.status === 200) {
              callback?.(res?.data);
            }
          },
        ),
      );
    },
    [dispatch],
  );

  const onGetChartDetailEarnService = useCallback(
    (id: string, duration: number, callback?: (data) => void) => {
      dispatch(
        HomeActions.getBaseActionsRequest(
          {
            endPoint: `${API_ENDPOINT.GET_CHART_EARN_DETAIL}?id=${id}&duration=${duration}`,
          },
          res => {
            if (res?.status === 200) {
              callback?.(res?.data);
            }
          },
        ),
      );
    },
    [dispatch],
  );

  const onGetHistoryTransaction = useCallback(
    (page = 1, duration: number, callback?: (data) => void, limit = 20) => {
      LoadingGlobal(true);
      dispatch(
        HomeActions.getBaseActionsRequest(
          {
            endPoint: `${
              API_ENDPOINT.GET_HISTORY_TRANSACTION + duration
            }&page=${page}&limit=${limit}`,
          },
          res => {
            if (res?.status === 200) {
              callback?.(res?.data);
              LoadingGlobal(false);
            }
            LoadingGlobal(false);
          },
        ),
      );
    },
    [dispatch],
  );

  const onGetDataWidget = useCallback(
    (address: string, duration: number, callback?: (data) => void) => {
      dispatch(
        HomeActions.getBaseActionsRequest(
          {
            endPoint: `${API_ENDPOINT.GET_WIDGET}?duration=${duration}&address=${address}`,
          },
          res => {
            if (res?.status === 200) {
              callback?.(res?.data);
            }
          },
        ),
      );
    },
    [dispatch],
  );

  return {
    servicesEarn,
    appServices,
    loading,
    news,
    events,
    wallets,
    account,
    onGetListBanner,
    onGetListEvent,
    onGetListNews,
    onGetListApp,
    onGetListWallet,
    queryListWallet,
    onGetListEarnService,
    onGetTopListEarnThisMonth,
    onGetStatisticsEarning,
    onGetDetailEarnService,
    onGetExchangeRate,
    onGetChartToken,
    onGetDocSetting,
    onGetChartEarnService,
    onGetChartDetailEarnService,
    onGetHistoryTransaction,
    onGetDataWidget,
    queryNews,
    queryListEarnServiceByDuration,
    queryChartEarnService,
    queryExchangeRate,
  };
};
