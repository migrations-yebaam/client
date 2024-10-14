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
  requests?: T; 
  friends?:T
  suggestedFriends?:T
  data:T
  users:T
}

export interface ISentFriendRequestsResponse {
  requests: IFriendRequest[]; 
}

export interface IReceivedFriendRequestsResponse {
  requests: IFriendRequest[]; 
}

export interface IUserDocument {
  _id?: string;
  username?: string;
  email?: string;
  profilePicture?: string;
}
