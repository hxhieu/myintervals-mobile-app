import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './src/pages/Landing';
import TokenSetup from './src/pages/TokenSetup';
import { RootStackParamList } from './src/pages/navigation';

import './src/styles/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
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
  );
}
