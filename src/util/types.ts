export interface IBlogPost {
  uid: string;
  title: string;
  url: string;
}

export interface IUser {
  name: string;
  password: string;
  userType: EUserType;
  userId: string;
}

export enum EUserType {
  ADMIN = "admin",
  USER = "user",
}

export interface AuthInterface {
  userId: string | undefined;
  authToken: string | undefined;
}

export interface IUrlKeyMap {
  [key: string]: number;
}
