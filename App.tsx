import './setup';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { Button } from 'react-native-ui-lib';
import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootSiblingParent } from 'react-native-root-siblings';

import { Init, Login } from './src/pages';
import { RootStackParamList } from './src/pages/navigation';

import './src/styles/theme';
import { Dashboard } from './src/pages/Dashboard';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const scheme = useColorScheme();
  return (
    <RootSiblingParent>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="Init">
          <Stack.Screen
            name="Init"
            component={Init}
            options={{ title: 'Initialising' }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Setting you up' }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              title: 'Dashboard',
              headerRight: () => <Button label="Me" />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
