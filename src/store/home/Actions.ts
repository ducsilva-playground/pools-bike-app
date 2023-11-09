/** @format */

import { IHomeActionPayload } from 'types';

export const HomeActions = {
  GET_BASE_ACTIONS: 'GET_BASE_ACTIONS_HOME',
  POST_BASE_ACTIONS: 'POST_BASE_ACTIONS_HOME',
  GET_BASE_ACTIONS_ACTIVITY: 'GET_BASE_ACTIONS_ACTIVITY',
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: HomeActions.GET_BASE_ACTIONS,
  callback,
});

export const getBaseActivityRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: HomeActions.GET_BASE_ACTIONS_ACTIVITY,
  callback,
});

export const postBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload?.type || HomeActions.POST_BASE_ACTIONS,
  callback,
});
