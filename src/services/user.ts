import { getItemAsync, setItemAsync } from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { Me } from '../api/Me';
import { executeApi } from './api-wrapper';
import { API_TOKEN_STORE_KEY } from './store';
import { GetMeResponse, GetUserResponse } from '../models';

interface UserServiceHook {
  loading: boolean;
  apiToken: string | null;
  saveApiToken(token: string): Promise<void>;
  verifyApiToken(token: string): Promise<GetUserResponse | undefined>;
}

const useUser = (): UserServiceHook => {
  const [apiTokenState, setApiTokenState] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Initial load user from the store
  useEffect(() => {
    getItemAsync(API_TOKEN_STORE_KEY)
      .then((token) => setApiTokenState(token))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const saveApiToken = async (token: string) => {
    // Save to store
    await setItemAsync(API_TOKEN_STORE_KEY, token);
    setApiTokenState(token);
  };

  const verifyApiToken = async (
    token: string,
  ): Promise<GetUserResponse | undefined> => {
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

    return me?.me[0];
  };

  return {
    loading,
    apiToken: apiTokenState,
    saveApiToken,
    verifyApiToken,
  };
};

export { API_TOKEN_STORE_KEY, useUser };
