import Toast, { ToastOptions } from 'react-native-root-toast';
import { Colors } from 'react-native-ui-lib';

let toast: any;

const defaultOptions: ToastOptions = {
  duration: 5000,
  hideOnPress: true,
};

const errorToast = (err: any, timeout?: number) => {
  clearToast();
  toast = Toast.show(err.message, {
    ...defaultOptions,
    duration: timeout || 10000,
    backgroundColor: Colors.error,
  });
};

const successToast = (msg: string, timeout?: number) => {
  clearToast();
  toast = Toast.show(msg, {
    ...defaultOptions,
    duration: timeout || 5000,
    backgroundColor: Colors.success,
  });
};

const infoToast = (msg: string, timeout?: number) => {
  clearToast();
  toast = Toast.show(msg, {
    ...defaultOptions,
    duration: timeout || 5000,
  });
};

const clearToast = () => toast && Toast.hide(toast);

export { clearToast, infoToast, successToast, errorToast };
