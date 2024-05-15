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
  const [showToast, setShowToast] = useState(false);
  const txtApiTokenRef = useRef<TextFieldRef>();

  const { apiToken, loading, setApiToken, verifyApiToken } = useUser();

  const btnText = useMemo(() => (loading ? 'Processing...' : 'OK'), [loading]);

  const onSave = async () => {
    if (!txtApiTokenRef.current?.validate()) {
      return;
    }
    setShowToast(false);
    const valid = await verifyApiToken(apiTokenForm || '');
    if (!valid) {
      setShowToast(true);
    }
    console.log(valid);
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
      <Toast
        visible={showToast}
        position="bottom"
        autoDismiss={5000}
        message="Failed to fetch/verify the token"
        backgroundColor="pink"
        onDismiss={() => setShowToast(false)}
      />
    </>
  );
};

export default gestureHandlerRootHOC(TokenSetup);
