/** @format */

import { takeLatest, put, all, takeEvery } from 'redux-saga/effects';
import { IHomeActionPayload, INofifyState } from 'types';
import { HomeActions } from './Actions';
import { actionRequest, getDataSuccess } from './Reducer';
import { error } from 'store/notify';
import axiosClient from 'utils/services/axios';

function* onGetBaseActionsRequest(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    const rs = yield axiosClient.get(`${action.payload.endPoint}`);
    console.log('onHome-rs', `${action.payload.endPoint}`, rs);

    if (rs.status === 200) {
      const dataKey = action?.payload?.dataKey;
      console.log('dataKey', dataKey);
      const data = action?.payload?.isPaginate
        ? rs?.data
        : action?.payload?.isObject
        ? rs?.data[0]
        : rs?.data;
      const payload = dataKey ? { [`${dataKey}`]: data } : {};
      console.log('onHome-payload', `${action.payload.endPoint}`, data);

      yield put(getDataSuccess(payload));
      if (action?.callback) {
        action?.callback?.(rs);
      }
    }
  } catch (e: any) {
    console.log('onHome-action-err', JSON.stringify(e));
    yield put(
      error({
        message: 'some_thing_wrong',
        options: { useI18n: true },
      } as INofifyState),
    );
    yield put(getDataSuccess({}));
    return action?.callback?.({ ...e });
  }
}

function* onPostBaseAction(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    console.log(
      'onPostNews-action',
      JSON.stringify(action),
      `${action.payload.endPoint}`,
    );
    const rs = yield axiosClient.post(
      `${action.payload.endPoint}`,
      JSON.stringify(action?.payload?.formData),
    );
    console.log(
      'onPostNews-rs',
      JSON.stringify(rs.status),
      `${action.payload.endPoint}`,
    );

    const dataKey = action?.payload?.dataKey;
    const data = action?.payload?.isPaginate
      ? rs?.data
      : action?.payload?.isObject
      ? rs?.data?.result[0]
      : rs?.data?.result;
    const payload = dataKey && rs?.data?.result ? { [`${dataKey}`]: data } : {};
    console.log('onPostNews-payload', `${action.payload.endPoint}`, data);

    yield put(getDataSuccess(payload));
    if (action?.callback) {
      action?.callback?.(rs);
    }
  } catch (e: any) {
    console.log('onPostNews-action-err', JSON.stringify(e));
    yield put(
      error({
        message: 'some_thing_wrong',
        options: { useI18n: true },
      } as INofifyState),
    );
    yield put(getDataSuccess({}));
    if (action?.callback) {
      action?.callback?.({ success: false, ...e });
    }
  }
}

function* watchPostBaseActions() {
  yield takeLatest(HomeActions.POST_BASE_ACTIONS as any, onPostBaseAction);
}

function* watchGetBaseActions() {
  yield takeEvery(HomeActions.GET_BASE_ACTIONS as any, onGetBaseActionsRequest);
}

function* watchGetBaseActivity() {
  yield takeLatest(
    HomeActions.GET_BASE_ACTIONS_ACTIVITY as any,
    onGetBaseActionsRequest,
  );
}

export default function* homeSagas() {
  yield all([
    watchGetBaseActions(),
    watchPostBaseActions(),
    watchGetBaseActivity(),
  ]);
}
