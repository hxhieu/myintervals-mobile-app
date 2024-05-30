import { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Button,
  TextField,
  TextFieldRef,
  Text,
  Colors,
} from 'react-native-ui-lib';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useUser } from '../services/user';
import { RootStackParamList } from './navigation';
import { errorToast } from '../services/toast';
import { useTopProgressBar } from '../components/TopProgressBar';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const login = ({
  navigation,
  route: {
    params: { token, alreadyLoggedIn },
  },
}: Props) => {
  const [apiTokenForm, setApiTokenForm] = useState<string>();
  const txtApiTokenRef = useRef<TextFieldRef>();
  const [showPostVerify, setShowPostVerify] = useState(false);

  const { user, loading, verifyApiToken, signOut } = useUser();
  const { setActiveLoader } = useTopProgressBar();

  const btnVerifyText = useMemo(
    () => (loading ? 'Processing...' : 'OK'),
    [loading],
  );

  const btnLogoutText = useMemo(
    () => (alreadyLoggedIn ? 'Sign Off' : "No, that's not me..."),
    [alreadyLoggedIn],
  );

  useEffect(() => {
    if (!token) {
      return;
    }
    verifyApiToken(token, true).then(setShowPostVerify).catch(errorToast);
  }, []);

  useEffect(() => setActiveLoader(loading), [loading]);

  const onVerify = async () => {
    if (!txtApiTokenRef.current?.validate()) {
      return;
    }
    const success = await verifyApiToken(apiTokenForm || '', true);
    setShowPostVerify(success);
  };

  const signOff = async () => {
    await signOut();
    setShowPostVerify(false);
    setApiTokenForm(undefined);
  };

  const signIn = () => {
    navigation.replace('Dashboard');
  };

  return (
    <View flex padding-20 paddingL-40 paddingR-40 bg-screenBG>
      {(!showPostVerify || !user) && (
        <View flex>
          <View flex>
            <TextField
              placeholder={'Enter API Token'}
              onChangeText={setApiTokenForm}
              enableErrors
              validate={['required']}
              validationMessage={['Token is required']}
              validateOnChange
              showCharCounter={true}
              maxLength={20}
              showMandatoryIndication
              floatingPlaceholder
              txtDefault
              value={apiTokenForm}
              ref={txtApiTokenRef as any}
              readOnly={loading}
            />
          </View>
          <Button label={btnVerifyText} onPress={onVerify} disabled={loading} />
        </View>
      )}
      {showPostVerify && user && (
        <View flex>
          <View flex-1>
            <Text text40BO marginB-20 textColor>
              Hi {user.firstname}! Is that you?
            </Text>
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
          <View flex-3 />
          {!alreadyLoggedIn && (
            <Button marginB-10 label="Yes! Let me in!" onPress={signIn} />
          )}
          <Button
            backgroundColor={Colors.error}
            textColor
            label={btnLogoutText}
            onPress={signOff}
          />
        </View>
      )}
    </View>
  );
};

const Login = gestureHandlerRootHOC(login);

export { Login };
