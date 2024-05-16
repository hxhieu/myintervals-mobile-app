import { AxiosError } from 'axios';
import { getItemAsync } from 'expo-secure-store';

import { API_TOKEN_STORE_KEY } from './store';
import { errorToast } from './toast';

// TODO: Match with swagger-gen ctor?
type ApiCtor = { new (...args: any[]): any };
type ApiMethod = string;

const executeApi = async <T>(
  ctor: ApiCtor,
  method: ApiMethod,
  methodArgs?: any,
  cleanUp?: () => Promise<void>,
  token?: string,
): Promise<T | undefined> => {
  try {
    const apiToken = token ?? (await getItemAsync(API_TOKEN_STORE_KEY));
    const api = new ctor({
      auth: {
        username: apiToken,
        password: 'X',
      },
    });
    const apiMethod = api[method];
    if (typeof apiMethod === 'function') {
      const data: T = await apiMethod(methodArgs);
      return data;
    }
  } catch (e) {
    const err = e as AxiosError;
    errorToast(err);

    // TODO: Telemetry?
  } finally {
    if (typeof cleanUp === 'function') {
      await cleanUp();
    }
  }
};

export { executeApi };
