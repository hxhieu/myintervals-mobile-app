export type RootStackParamList = {
  Init: undefined;
  Login: {
    token?: string;
    alreadyLoggedIn?: boolean;
  };
  Dashboard: undefined;
  Profile: undefined;
};
