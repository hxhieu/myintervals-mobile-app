import { useMemo, useRef, useState } from 'react';
import { View, Button, TextField, TextFieldRef } from 'react-native-ui-lib';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { useUser } from '../services/user';

const TokenSetup = () => {
  const [apiTokenForm, setApiTokenForm] = useState<string>();
  const txtApiTokenRef = useRef<TextFieldRef>();
  const [showPostVerify, setShowPostVerify] = useState(false);

  const { user, loading, verifyApiToken } = useUser();

  const btnText = useMemo(() => (loading ? 'Processing...' : 'OK'), [loading]);

  const onVerify = async () => {
    if (!txtApiTokenRef.current?.validate()) {
      return;
    }
    const success = await verifyApiToken(apiTokenForm || '', true);
    setShowPostVerify(success);
  };

  return (
    <View flex padding-20 paddingL-40 paddingR-40 bg-screenBG>
      {(!showPostVerify || !user) && (
        <View>
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
          <Button label={btnText} onPress={onVerify} disabled={loading} />
        </View>
      )}
      {showPostVerify && user && <View></View>}
    </View>
  );
};

export default gestureHandlerRootHOC(TokenSetup);
