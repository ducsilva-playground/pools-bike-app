/** @format */

import { API_HOST } from '@env';
import axios from 'axios';
import { useKey } from 'hooks';
import { configStore } from 'store/createStore';
import { logoutRequest } from 'store/user';
import { API_ENDPOINT } from 'utils';
import { KEY_CONTEXT } from '../helpers/constants';

const config = {
  baseURL: API_HOST,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 5000,
};

console.log('🚀 ~ file: axios.ts:23 ~ process.env.API_HOST:', API_HOST);
const axiosClient = axios.create(config);

axiosClient.interceptors.request.use(
  async (req: any) => {
    const { getKeyStore } = useKey();
    const token = await getKeyStore(KEY_CONTEXT.ACCESS_TOKEN);
    console.log(token);
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (err: any) => Promise.reject(err),
);

axiosClient.interceptors.response.use(
  (res: any) => Promise.resolve(res.data),
  async (err: any) => {
    const originalRequest = err.config;
    console.log(
      'axios-err.response.status',
      err.response.status,
      ((err || {}).response || {}).data,
      err.config.__isRetryRequest,
    );

    if (
      err &&
      err.response &&
      err.response.status === 401 &&
      !err.config.__isRetryRequest
    ) {
      const { saveKeyStore } = useKey();
      const { store } = configStore();

      return axios
        .get(`${API_HOST}/${API_ENDPOINT.GET_SESSION}`, {
          headers: config.headers,
        })
        .then(async (response: any) => {
          const { accessToken } = response?.data?.data?.result?.[0] || '';
          if (response?.data?.status !== 200) {
            // logoutRequest();
            return null;
          }
          console.log('axios-sucess', accessToken);
          originalRequest.headers = {
            ...originalRequest.headers,
            authorization: `Bearer ${accessToken}`,
          };
          originalRequest.__isRetryRequest = true;
          await saveKeyStore(KEY_CONTEXT.ACCESS_TOKEN, accessToken);

          return axiosClient(originalRequest);
        })
        .catch(e => {
          console.log('axios-catch', JSON.stringify(e));
          store.dispatch(logoutRequest({ redirect: true }));
          // logoutRequest();
        });
    }
    return Promise.reject({ data: ((err || {}).response || {}).data });
  },
);

export default axiosClient;
