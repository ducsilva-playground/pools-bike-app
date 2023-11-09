import React from 'react';
import ProfileForm from './ProfileForm';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from 'hooks';
import { MainLayout } from 'components';
import { ActivityIndicator } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { LoadingGlobal } from 'components';

const Profile = () => {
  const { user } = useAuth();
  const { onGetProfile } = useAuth();
  const { data, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: () => onGetProfile(),
  });
  if (!data) {
    LoadingGlobal(true);
  } else {
    LoadingGlobal(false);
  }
  return data ? (
    <ProfileForm user={user} refetch={refetch} />
  ) : (
    <MainLayout showAuthHeader showTextBack>
      <ScrollView showsVerticalScrollIndicator={false} />
    </MainLayout>
  );
};

export default Profile;
