import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Button from 'react-native-ui-lib/button';
import LoaderScreen from 'react-native-ui-lib/loaderScreen';
import { useUser } from '../services/user';

import { shellStyles } from '../styles';

export default function Landing() {
  const { apiToken, loading: userLoading, setApiToken } = useUser();

  useEffect(() => {
    if (apiToken) {
      console.log('TODO: Fetch user/handshake');
      setApiToken('');
    } else {
      console.log('go to setup');
    }
  }, [apiToken]);

  return (
    <View style={shellStyles.container}>
      <StatusBar style="auto" />
      {userLoading && <LoaderScreen />}
      <Button label={'Press'} size={Button.sizes.large} />
    </View>
  );
}
