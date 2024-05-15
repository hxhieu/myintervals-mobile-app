import { useMemo, useRef, useState } from 'react';
import {
  View,
  Button,
  TextField,
  TextFieldRef,
  Incubator,
} from 'react-native-ui-lib';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const { Toast } = Incubator;

import { useUser } from '../services/user';

const TokenSetup = () => {
  const [apiTokenForm, setApiTokenForm] = useState<string>();
  const txtApiTokenRef = useRef<TextFieldRef>();

  const { apiToken, loading, saveApiToken, verifyApiToken } = useUser();

  const btnText = useMemo(() => (loading ? 'Processing...' : 'OK'), [loading]);

  const onSave = async () => {
    if (!txtApiTokenRef.current?.validate()) {
      return;
    }
    const user = await verifyApiToken(apiTokenForm || '');
    if (user) {
      console.log(user);
    }
  };

  return (
    <>
      <View flex margin-20 marginL-40 marginR-40>
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
        <Button label={btnText} onPress={onSave} disabled={loading} />
      </View>
    </>
  );
};

export default gestureHandlerRootHOC(TokenSetup);
