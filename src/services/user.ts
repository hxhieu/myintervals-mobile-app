import { useEffect, useState } from 'react';
import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store';
import { atom, useAtom } from 'jotai';
import { Me } from '../api/Me';
import { executeApi } from './api-wrapper';
import { API_TOKEN_STORE_KEY } from './store';
import { GetMeResponse, GetUserResponse } from '../models';
import { useDashboard } from './dashboard';

interface UserServiceHook {
  loading: boolean;
  apiToken?: string;
  user?: GetUserResponse;
  verifyApiToken(token: string, forceSave?: boolean): Promise<boolean>;
  signOut(): Promise<void>;
}

// Global state
const userStore = atom<GetUserResponse | undefined>(undefined);
const loadingStore = atom<boolean>(false);
const apiTokenStore = atom<string | undefined>(undefined);

const useUser = (): UserServiceHook => {
  const [apiTokenState, setApiTokenState] = useAtom(apiTokenStore);
  const [user, setUser] = useAtom<GetUserResponse | undefined>(userStore);
  const [loading, setLoading] = useAtom(loadingStore);
  const { clearDashboard } = useDashboard();

  // Initial load api token from the store
  useEffect(() => {
    getItemAsync(API_TOKEN_STORE_KEY)
      .then((token) => setApiTokenState(token || undefined))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Verify needs to be called every app start
  // To ensure token validity
  const verifyApiToken = async (
    token: string,
    forceSave?: boolean,
  ): Promise<boolean> => {
    setLoading(true);
    const me = await executeApi<GetMeResponse, any>(
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

  const signOut = async () => {
    await deleteItemAsync(API_TOKEN_STORE_KEY);
    setApiTokenState(undefined);
    setUser(undefined);
    clearDashboard();
  };

  return {
    loading,
    apiToken: apiTokenState,
    user,
    verifyApiToken,
    signOut,
  };
};

export { API_TOKEN_STORE_KEY, useUser };
