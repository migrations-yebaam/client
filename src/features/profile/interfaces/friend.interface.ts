export interface IFriendRequest {
  receiverId: string;
  username: string;
  profilePicture: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface IFriend {
  userId: string;
  username: string;
  profilePicture: string;
}

export interface IResponse<T = any> {
  message: string;
  requests?: T; // Cambiar data por requests para reflejar la estructura correcta
  friends?:T
  suggestedFriends?:T
}

export interface ISentFriendRequestsResponse {
  requests: IFriendRequest[]; // Aquí mantenemos la estructura de requests
}

export interface IReceivedFriendRequestsResponse {
  requests: IFriendRequest[]; // Igual que en la respuesta de solicitudes recibidas
}

export interface IUserDocument {
  _id?: string;
  username?: string;
  email?: string;
  profilePicture?: string;
}
