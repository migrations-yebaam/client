import { IAuthUser } from "../features/auth/interfaces/auth.interface";
import { INotification } from "../shared/header/interfaces/header.interface";

export interface IReduxState {
  authUser: IAuthUser;
  header: string;
  logout: boolean;
  notification: INotification;
}
