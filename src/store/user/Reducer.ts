/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { IAppState } from 'types';
import { ELanguage } from 'utils';

const initialState = {
  loading: false,
  error: null,
  language: ELanguage.EN,
  isAuth: false,
  user: null,
} as IAppState;

const userSlice = createSlice({
  name: 'app',
  initialState,
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
    reset: () => initialState,
  },
});

export const { actionRequest, getDataSuccess, reset } = userSlice.actions;

export default userSlice.reducer;
