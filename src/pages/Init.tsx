import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useUser } from '../services/user';
import { shellStyles } from '../styles';
import { RootStackParamList } from './navigation';
import { useTopProgressBar } from '../components/TopProgressBar';

type Props = NativeStackScreenProps<RootStackParamList, 'Init'>;

const Init = ({ navigation }: Props) => {
  const { apiToken, loading: userLoading } = useUser();
  const { setActiveLoader } = useTopProgressBar();

  useEffect(() => {
    if (!userLoading) {
      return navigation.replace('Login', { token: apiToken });
    }
    setActiveLoader(userLoading);
  }, [userLoading]);

  return (
    <View style={shellStyles.container}>
      <StatusBar style="auto" />
    </View>
  );
};

export { Init };
