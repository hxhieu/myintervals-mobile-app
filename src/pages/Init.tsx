import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import LoaderScreen from 'react-native-ui-lib/loaderScreen';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useUser } from '../services/user';
import { shellStyles } from '../styles';
import { RootStackParamList } from './navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Init'>;

const Init = ({ navigation }: Props) => {
  const { apiToken, loading: userLoading } = useUser();

  useEffect(() => {
    if (!userLoading) {
      navigation.replace('Login', { token: apiToken });
    }
  }, [userLoading]);

  return (
    <View style={shellStyles.container}>
      <StatusBar style="auto" />
      {userLoading && <LoaderScreen />}
    </View>
  );
};

export { Init };
