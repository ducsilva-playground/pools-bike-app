/**
 * @description the hook to handle all authentication's action
 */
// import {useKey} from 'hooks';
// import {NavigationService, Routes} from 'navigation';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import * as UserActions from 'store/user';
import { IContact } from 'types';
import { API_ENDPOINT } from 'utils';
import { useNotify } from './useNotify';

export const useUser = () => {
  const dispatch = useDispatch();
  const { danger, success } = useNotify();
  const { t } = useTranslation();

  const onStaffChangePass = useCallback(
    (formData, callback?: (rs?: any) => {}) => {
      try {
        dispatch(
          UserActions.putBaseActionsRequest(
            {
              formData: formData,
              endPoint: API_ENDPOINT.MERCHANT.CHANGE_PASSWORD,
            },
            res => {
              if (
                res?.status === 200 &&
                res?.data === 'Update password successfully'
              ) {
                success('success', t('success.change_pass'));
                callback?.(res);
              } else {
                danger('error', `${res?.data?.message}`);
              }
            },
          ),
        );
      } catch (error) {
        danger(t('error'), t('error.change_pass'));
      }
    },
    [danger, success],
  );
  const onStaffContactUs = useCallback(
    (formData: IContact, callback?: (rs?: any) => {}) => {
      try {
        dispatch(
          UserActions.postBaseActionsRequest(
            {
              formData: formData,
              endPoint: API_ENDPOINT.MERCHANT.CONTACT_US,
            },
            res => {
              if (res?.status === 200) {
                success('success', t('success.contact_us'));
                callback?.(res);
              } else {
                danger(t('error'), `${res?.message}`);
              }
            },
          ),
        );
      } catch (error) {
        danger(t('error'), t('error.change_pass'));
      }
    },
    [danger, success],
  );

  return {
    onStaffChangePass,
    onStaffContactUs,
  };
};
