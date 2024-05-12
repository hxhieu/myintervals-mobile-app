import { getItemAsync, setItemAsync } from 'expo-secure-store';
import { useEffect, useState } from 'react';
const API_TOKEN_STORE_KEY = 'API_TOKEN';

interface UserServiceHook {
  loading: boolean;
  apiToken: string | null;
  setApiToken(token: string): Promise<void>;
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

  const setApiToken = async (token: string) => {
    await setItemAsync(API_TOKEN_STORE_KEY, token);
    setApiTokenState(token);
  };

  return {
    loading,
    apiToken: apiTokenState,
    setApiToken,
  };
};

export { API_TOKEN_STORE_KEY, useUser };
