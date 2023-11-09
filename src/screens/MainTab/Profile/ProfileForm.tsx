import { Images } from 'assets';
import CommonSvg from 'assets/svg/CommonSvg';
import ProfileSvg from 'assets/svg/ProfileSvg';
import {
  Buttons,
  ImageCus,
  MainLayout,
  TextCus,
  TextInputs,
  TouchCus,
  ViewCus,
} from 'components';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';
import { API_HOST } from '@env';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'hooks';
import { NavigationService, Routes } from 'navigation';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IFormUpdateProfileData } from 'types';
import {
  copyToClipboard,
  formatAddress,
  isValidURL,
  validateFormUpdateProfile,
} from 'utils';
import ImageCropPicker from 'components/ImageCropPicker/ImageCropPicker';
const ProfileForm = ({ user, refetch }) => {
  const { onUpdateProfile } = useAuth();
  const defaultAvatar = user?.avatar;
  const [avatar, setAvatar] = useState(user?.avatar);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUpdateProfileData>({
    mode: 'onChange',
    resolver: yupResolver(validateFormUpdateProfile),
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone_number,
    },
  });
  const { t } = useTranslation();

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone_number', data.phone);
    if (avatar !== defaultAvatar) {
      formData.append('avatar', {
        uri: avatar?.uri,
        name: `${avatar?.filename}.png`,
        fileName: 'image',
        type: avatar?.fileType,
      });
    }

    await onUpdateProfile(formData);
    refetch();
  };
  console.log('avatar', avatar, isValidURL(avatar));

  return (
    <MainLayout showAuthHeader showTextBack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewCus px-24>
          <ViewCus mt-41 fd-row mb-32 items-center justify-space-between>
            <TextCus whiteColor useI18n style={styles.textProfile} medium>
              profile.profile
            </TextCus>
          </ViewCus>

          <ViewCus fd-row items-flex-start justify-center>
            <ViewCus fd-column items-center justify-center>
              <ViewCus w-60 h-60>
                <ImageCropPicker
                  value={
                    avatar
                      ? isValidURL(avatar)
                        ? avatar?.uri || avatar
                        : API_HOST + 'images/' + avatar
                      : null
                  }
                  style={styles.avatar}
                  onChangePicture={image => {
                    setAvatar(image);

                    return {};
                  }}
                />
                {/* <ImageCus
                  source={
                    user?.avatar ? { uri: user?.avatar } : Images.default_avatar
                  }
                  resizeMode={'contain'}

                /> */}
                <ViewCus style={styles.editIcon}>{CommonSvg.Edit()}</ViewCus>
              </ViewCus>
              <ViewCus mt-20 fd-row items-center justify-center>
                <TextCus>Pools ID:</TextCus>
                <TextCus mx-8>{formatAddress(user.pools_id, 5, 5)}</TextCus>
                <TouchCus onPress={() => copyToClipboard(user.pools_id)}>
                  {ProfileSvg.Copy()}
                </TouchCus>
              </ViewCus>
            </ViewCus>
            <ViewCus style={styles.nft}>
              <TouchCus
                onPress={() => NavigationService.navigate(Routes.UpdateNft)}>
                {ProfileSvg.NFT()}
              </TouchCus>
            </ViewCus>
          </ViewCus>

          <ViewCus
            mt-32
            style={styles.groupInput}
            fd-column
            items-center
            justify-center>
            <Controller
              control={control}
              defaultValue={''}
              name="name"
              render={({ field: { value, onChange, onBlur } }) => (
                <TextInputs
                  label={t('profile.name')}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  labelStyle={styles.inputTitle}
                  placeholder={user.name}
                  autoFocus={false}
                  error={errors?.name?.message}
                />
              )}
            />

            <ViewCus fd-column items-flex-end style={styles.inputEmail}>
              <Controller
                control={control}
                defaultValue={''}
                name="email"
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextInputs
                    disabled
                    label={t('auth.email')}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    labelStyle={styles.inputTitle}
                    placeholder={t('auth.enter_your_email')}
                    autoFocus={false}
                    error={errors?.email?.message}
                  />
                )}
              />

              {false ? (
                <ViewCus fd-row items-center>
                  <TextCus colorFF00 mt--10 useI18n caption2>
                    profile.unverified_email
                  </TextCus>
                  <TouchCus
                    onPress={() =>
                      NavigationService.navigate(Routes.VerifyEmail)
                    }>
                    <TextCus
                      useI18n
                      colorFF00
                      mt--10
                      ml-3
                      caption2
                      style={styles.textverify}>
                      profile.verify_now
                    </TextCus>
                  </TouchCus>
                </ViewCus>
              ) : (
                <TextCus color1E mt--10 useI18n caption2>
                  profile.email_verified
                </TextCus>
              )}
            </ViewCus>
            <Controller
              control={control}
              defaultValue={''}
              name="phone"
              render={({ field: { value, onChange, onBlur } }) => (
                <TextInputs
                  label={t('profile.phone')}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  labelStyle={styles.inputTitle}
                  placeholder={t('profile.enter_your_phone')}
                  autoFocus={false}
                  error={errors?.phone?.message}
                />
              )}
            />
          </ViewCus>
          <ViewCus mt-60>
            <Buttons
              onPress={() => {
                handleSubmit(onSubmit)();
              }}>
              <TextCus bold body2 whiteColor useI18n>
                button.update
              </TextCus>
            </Buttons>
          </ViewCus>
        </ViewCus>
      </ScrollView>
    </MainLayout>
  );
};

export default ProfileForm;
