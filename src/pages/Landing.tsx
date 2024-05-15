import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import LoaderScreen from 'react-native-ui-lib/loaderScreen';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useUser } from '../services/user';
import { shellStyles } from '../styles';
import { RootStackParamList } from './navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

export default function Landing({ navigation }: Props) {
  const { apiToken, loading: userLoading, saveApiToken } = useUser();

  useEffect(() => {
    if (apiToken) {
      console.log('TODO: Fetch user/handshake');
      saveApiToken('');
    } else {
      navigation.replace('TokenSetup', {});
    }
  }, [apiToken]);

  return (
    <View style={shellStyles.container}>
      <StatusBar style="auto" />
      {userLoading && <LoaderScreen />}
    </View>
  );
}
