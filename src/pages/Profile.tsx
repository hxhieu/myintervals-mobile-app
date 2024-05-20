import { View, Button, Text, Colors } from 'react-native-ui-lib';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useUser } from '../services/user';
import { RootStackParamList } from './navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const profile = ({ navigation }: Props) => {
  const { user, clearStorage } = useUser();

  const signOff = async () => {
    await clearStorage();
    navigation.popToTop();
    navigation.replace('Login', {});
  };

  return (
    <View flex padding-20 paddingL-40 paddingR-40 bg-screenBG>
      {user && (
        <>
          <View flex-1>
            <View flex row left style={{ height: 10 }}>
              <Text textColor marginR-20 text70BO>
                First Name:
              </Text>
              <Text textColor>{user.firstname}</Text>
            </View>
            <View flex row left>
              <Text textColor marginR-20 text70BO>
                Last Name:
              </Text>
              <Text textColor>{user.lastname?.toUpperCase()}</Text>
            </View>
            <View flex row left>
              <Text textColor marginR-20 text70BO>
                User Name:
              </Text>
              <Text textColor>{user.username}</Text>
            </View>
          </View>
          <View flex-4 />
        </>
      )}
      <Button
        backgroundColor={Colors.error}
        textColor
        label="Log out"
        onPress={signOff}
      />
    </View>
  );
};

const Profile = gestureHandlerRootHOC(profile);

export { Profile };
