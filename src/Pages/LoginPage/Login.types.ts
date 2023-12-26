export interface ILoginInformation {
  username: string;
  password: string;
}

export interface IDateTime {
  date: string;
  time: string;
}

export interface IUserError {
  usernameError: boolean;
  passwordError: boolean;
}
