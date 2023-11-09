/** @format */
import { IInfoDevice } from './../../types/app';
import { createSlice } from '@reduxjs/toolkit';
import { IHomeState } from 'types';
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    loading: false,
    error: null,
    isOpenMenu: false,
    infoDevice: null,
    passcode: null,
    account: null,
    news: null,
    events: null,
    wallets: null,
    appServices: null,
    servicesEarn: null,
  } as IHomeState,
  reducers: {
    actionRequest: state => {
      return {
        ...state,
        error: null,
        loading: true,
      };
    },
    getDataSuccess: (state, { payload }: { payload: any }) => {
      return {
        ...state,
        error: null,
        loading: false,
        ...payload,
      };
    },
    toggleMenu: (state, action) => {
      return {
        ...state,
        error: null,
        loading: false,
        isOpenMenu: action.payload,
      };
    },
    setInfoDevice: (state, { payload }: { payload: IInfoDevice }) => {
      return {
        ...state,
        error: null,
        loading: false,
        infoDevice: payload,
      };
    },
    setPasscode: (state, { payload }: { payload: string }) => {
      return {
        ...state,
        error: null,
        loading: false,
        passcode: payload,
      };
    },
    reset: state => {
      return {
        ...state,
        error: null,
        loading: false,
        infoDevice: null,
        passcode: null,
        account: null,
        news: null,
        events: null,
        wallets: null,
        appServices: null,
        servicesEarn: null,
      };
    },
  },
});

export const {
  actionRequest,
  getDataSuccess,
  toggleMenu,
  setInfoDevice,
  setPasscode,
  reset,
} = homeSlice.actions;

export default homeSlice.reducer;
