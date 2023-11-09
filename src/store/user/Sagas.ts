/** @format */

import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { error } from 'store/notify';
import { IHomeActionPayload, INofifyState } from 'types';
import { showErr } from 'utils';
import { UserActions } from './Actions';
import { actionRequest, getDataSuccess, reset } from './Reducer';
import axiosClient from 'utils/services/axios';

function* onGetBaseActionsRequest(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    console.log('onGetBaseActionsRequest-action', JSON.stringify(action));
    const rs = yield axiosClient.get(`${action.payload.endPoint}`);

    // if(rs.status === 200)
    if (rs) {
      const dataKey = action?.payload?.dataKey;

      const payload = dataKey
        ? {
            [`${dataKey}`]: action?.payload?.isObject ? rs?.data : rs?.data,
          }
        : {};
      yield put(getDataSuccess(payload));
      if (action?.callback) {
        action?.callback?.(rs);
      }
    }
  } catch (e: any) {
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

function* watchGetBaseActions() {
  yield takeEvery(UserActions.GET_BASE_ACTIONS as any, onGetBaseActionsRequest);
}

function* onPostBaseAction(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    const isFormData = action.payload?.isFormData;

    const rs = yield axiosClient
      .post(
        `${action.payload.endPoint}`,
        isFormData
          ? action?.payload?.formData
          : JSON.stringify(action?.payload?.formData),
        isFormData && action.payload.headers,
      )
      .catch(err => showErr(err?.data?.message ?? 'Some thing went wrong!'));

    const dataKey = action?.payload?.dataKey;

    const payload = dataKey
      ? {
          [`${dataKey}`]: action?.payload?.isObject ? rs?.data : rs?.data[0],
        }
      : {};
    console.log('onPostBaseAction-rs', JSON.stringify(payload));

    yield put(getDataSuccess(payload));
    if (action?.callback) {
      action?.callback?.(rs);
    }
  } catch (e: any) {
    console.log(e);
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
  yield takeLatest(UserActions.POST_BASE_ACTIONS as any, onPostBaseAction);
}

function* onPutBaseAction(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    const isFormData = action.payload?.isFormData;
    console.log('onPostBaseAction-action', JSON.stringify(action));
    const rs = yield axiosClient
      .put(
        `${action.payload.endPoint}`,
        isFormData
          ? action?.payload?.formData
          : JSON.stringify(action?.payload?.formData),
        isFormData && action.payload.headers,
      )
      .catch(err => showErr(err?.data.message ?? 'Some thing went wrong!'));
    console.log('rs in user', rs);
    const dataKey = action?.payload?.dataKey;

    console.log('onPostBaseAction-dataKey', dataKey);
    const payload = dataKey
      ? {
          [`${dataKey}`]: action?.payload?.isObject ? rs?.data : rs?.data,
        }
      : {};
    console.log('onPostBaseAction-rs', JSON.stringify(payload));

    yield put(getDataSuccess(payload));
    if (action?.callback) {
      action?.callback?.(rs);
    }
  } catch (e: any) {
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
function* watchPutBaseActions() {
  yield takeEvery(UserActions.PUT_BASE_ACTIONS as any, onPutBaseAction);
}
function* onLogoutAction(action) {
  try {
    yield put(reset());
    action?.callback?.();
  } catch (e: any) {
    action?.callback?.();
  }
}

function* watchLogout() {
  yield takeLatest(UserActions.LOGOUT as any, onLogoutAction);
}

export default function* userSagas() {
  yield all([
    watchGetBaseActions(),
    watchPostBaseActions(),
    watchPutBaseActions(),
    watchLogout(),
  ]);
}
