import './setup';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootSiblingParent } from 'react-native-root-siblings';
import Landing from './src/pages/Landing';
import TokenSetup from './src/pages/TokenSetup';
import { RootStackParamList } from './src/pages/navigation';

import './src/styles/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const scheme = useColorScheme();
  return (
    <RootSiblingParent>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ title: 'Initialising' }}
          />
          <Stack.Screen
            name="TokenSetup"
            component={TokenSetup}
            options={{ title: 'Setting you up' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
