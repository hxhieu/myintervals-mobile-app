export interface GetUserResponse {
  firstname: string;
  lastname: string;
  id: string;
  timezone: string;
  title: string;
  username: string;
}

export interface GetMeResponse {
  me: GetUserResponse[];
}
