import { getItemAsync, setItemAsync } from 'expo-secure-store';
import { useEffect, useState } from 'react';
const API_TOKEN_STORE_KEY = 'API_TOKEN';

interface UserServiceHook {
  loading: boolean;
  apiToken: string | null;
  setApiToken(token: string): Promise<void>;
  verifyApiToken(token: string): Promise<boolean>;
}

function timeout(delay: number) {
  return new Promise((r) => setTimeout(r, delay));
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
    // Save to store
    await setItemAsync(API_TOKEN_STORE_KEY, token);
    setApiTokenState(token);
  };

  const verifyApiToken = async (token: string) => {
    setLoading(true);
    await timeout(2000);
    setLoading(false);
    return false;
  };

  return {
    loading,
    apiToken: apiTokenState,
    setApiToken,
    verifyApiToken,
  };
};

export { API_TOKEN_STORE_KEY, useUser };
