import { useEffect } from 'react';
import { View, Button } from 'react-native-ui-lib';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useUser } from '../services/user';
import { RootStackParamList } from './navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const dashboard = ({ navigation }: Props) => {
  const { apiToken } = useUser();

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.push('Profile')} label="Me" />
      ),
    });
  }, [navigation, apiToken]);

  return <View flex padding-20 paddingL-40 paddingR-40 bg-screenBG></View>;
};

const Dashboard = gestureHandlerRootHOC(dashboard);

export { Dashboard };
