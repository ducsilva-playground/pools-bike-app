import React, { useCallback, useState } from 'react';
import {
  HomeLayout,
  TextCus,
  ViewCus,
  IconCus,
  KeyboardScrollView,
  TextInputs,
  BottomSheetModals,
} from 'components';
import styles from './styles';
import { Colors } from 'theme';
import { IconNames } from 'assets';
import { NavigationService, Routes } from 'navigation';
import { isIos, styleSpacing } from 'utils';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IAddBankInformation } from 'types';
import { useAuth } from 'hooks';

const BankAddDetail = () => {
  const { onAddBank, profile } = useAuth();
  const { t } = useTranslation();
  const { params } = NavigationService.route() || {};
  const [disabled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddBankInformation>({
    mode: 'onChange',
  });
  const headerProps = {
    renderLeft: () => (
      <IconCus name={IconNames.CHEVRON_LEFT} size={18} color={Colors.white} />
    ),
    renderCenter: () => (
      <ViewCus>
        <TextCus title4 medium whiteColor>
          {params?.short_name}
        </TextCus>
      </ViewCus>
    ),
  };

  const onHandleAddBank = useCallback((value: IAddBankInformation) => {
    const body = {
      ...value,
      bank_id: params?.id,
    };

    console.log('press', profile?.id);
    onAddBank({ formData: body, userId: profile?.id }, rs => {
      rs && setShowModal(true);
    });
  }, []);

  return (
    <HomeLayout
      bgColor={Colors.main}
      statusBarMode={'dark-content'}
      safeAreaEdges={['left', 'top', 'right']}
      header={{ ...headerProps }}>
      <ViewCus style={styles.container}>
        <KeyboardScrollView
          textBtn={'Thêm ngân hàng'}
          disabled={disabled}
          onPress={() => {
            handleSubmit(onHandleAddBank)();
          }}
          styleBtn={styleSpacing('pb-120')}
          styleContent={styles.container}>
          <ViewCus px-16 pt-16>
            <Controller
              control={control}
              name="account_number"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <ViewCus fd-row>
                    <TextCus>Số tài khoản </TextCus>
                    <TextCus errorColor>*</TextCus>
                  </ViewCus>
                  <TextInputs
                    style={styles.input}
                    autoCapitalize="none"
                    placeholder={t('Vui lòng nhập số tài khoản') ?? '' ?? ''}
                    onChangeText={onChange}
                    keyboardType={'number-pad'}
                    value={value}
                    onBlur={onBlur}
                    color={Colors.colorLine}
                    success
                  />
                </>
              )}
            />
            {errors.account_name && (
              <TextCus style={styles.fieldTextRequired}>
                {t('label.field_required')}
              </TextCus>
            )}
            <Controller
              control={control}
              name="account_name"
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <ViewCus fd-row>
                    <TextCus>Chủ tài khoản </TextCus>
                    <TextCus errorColor>*</TextCus>
                  </ViewCus>
                  <TextInputs
                    style={styles.input}
                    autoCapitalize="none"
                    placeholder={t('Vui lòng nhập tên tài khoản') ?? ''}
                    onChangeText={onChange}
                    disabled
                    editable={false}
                    value={value}
                    onBlur={onBlur}
                    color={Colors.colorLine}
                    success
                  />
                </>
              )}
            />
            {errors.identification && (
              <TextCus style={styles.fieldTextRequired} useI18n>
                label.account_required
              </TextCus>
            )}
            <Controller
              control={control}
              name="identification"
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <ViewCus fd-row>
                    <TextCus>CMND / CCCD / Hộ chiếu </TextCus>
                    <TextCus errorColor>*</TextCus>
                  </ViewCus>
                  <TextInputs
                    style={styles.input}
                    autoCapitalize="none"
                    placeholder={
                      t('Vui lòng nhập CMND / CCCD / Hộ chiếu') ?? ''
                    }
                    keyboardType={'number-pad'}
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    color={Colors.colorLine}
                    success
                  />
                </>
              )}
            />
          </ViewCus>
        </KeyboardScrollView>
      </ViewCus>
      {showModal && (
        <BottomSheetModals
          type="success"
          onOk={() => NavigationService.navigate(Routes.Account)}
          onClose={() => setShowModal(false)}
          top={isIos ? '35%' : '40%'}
          titleBtn="Hoàn tất"
          title="Đăng ký thành công"
          subtitle="Chào mừng bạn đã đến và trải nghiệm cùng ZupViec"
        />
      )}
    </HomeLayout>
  );
};

export default BankAddDetail;
