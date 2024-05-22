import { AxiosError } from 'axios';
import { getItemAsync } from 'expo-secure-store';

import { API_TOKEN_STORE_KEY } from './store';
import { errorToast } from './toast';

// TODO: Match with swagger-gen ctor?
type ApiCtor = { new (...args: any[]): any };
type ApiMethod = string;

const executeApi = async <TRes, TReq>(
  ctor: ApiCtor,
  method: ApiMethod,
  methodArgs?: TReq,
  cleanUp?: () => Promise<void>,
  token?: string,
): Promise<TRes | undefined> => {
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
      const data: TRes = await apiMethod(methodArgs);
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
