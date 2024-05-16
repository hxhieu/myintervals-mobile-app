import { useEffect, useState } from 'react';
import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store';
import { Me } from '../api/Me';
import { executeApi } from './api-wrapper';
import { API_TOKEN_STORE_KEY } from './store';
import { GetMeResponse, GetUserResponse } from '../models';

interface UserServiceHook {
  loading: boolean;
  apiToken?: string;
  user?: GetUserResponse;
  verifyApiToken(token: string, forceSave?: boolean): Promise<boolean>;
  clearStorage(): Promise<void>;
}

const useUser = (): UserServiceHook => {
  const [apiTokenState, setApiTokenState] = useState<string>();
  const [user, setUser] = useState<GetUserResponse>();
  const [loading, setLoading] = useState<boolean>(true);

  // Initial load user from the store
  useEffect(() => {
    getItemAsync(API_TOKEN_STORE_KEY)
      .then((token) => setApiTokenState(token || undefined))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const verifyApiToken = async (
    token: string,
    forceSave?: boolean,
  ): Promise<boolean> => {
    setLoading(true);
    const me = await executeApi<GetMeResponse>(
      Me,
      'getMe',
      undefined,
      async () => {
        setLoading(false), token;
      },
      token,
    );

    const success = !!me;

    // Update store
    if (success && forceSave) {
      await setItemAsync(API_TOKEN_STORE_KEY, token);
    }

    // Update state
    setApiTokenState(token);
    setUser(me?.me[0]);

    return success;
  };

  const clearStorage = async () => {
    await deleteItemAsync(API_TOKEN_STORE_KEY);
    setApiTokenState(undefined);
    setUser(undefined);
  };

  return {
    loading,
    apiToken: apiTokenState,
    user,
    verifyApiToken,
    clearStorage,
  };
};

export { API_TOKEN_STORE_KEY, useUser };
