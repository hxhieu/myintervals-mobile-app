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

import { Init, Login, Dashboard, Profile } from './src/pages';
import { RootStackParamList } from './src/pages/navigation';

import './src/styles/theme';
import './src/styles/icons';
import { TopProgressBar } from './src/components/TopProgressBar';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const scheme = useColorScheme();
  return (
    <RootSiblingParent>
      <TopProgressBar />
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
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              title: 'Profile',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
