export type RootStackParamList = {
  Init: {};
  Login: {
    token?: string;
    alreadyLoggedIn?: boolean;
  };
  Dashboard: {};
};
