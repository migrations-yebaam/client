import { getUserById } from "../services/users";

export const fetchFriendInfo = async ( token: string, friendId: string) => {
  return await getUserById(token, friendId);
};

export const getFriendsInfo = async (token: string, friendsIdList: Array<string> = [], onSetFriends: Function) => {
  const friendsArray = friendsIdList || [];
  if(friendsArray.length === 0) onSetFriends([]);
  const friendsInfoPromises =  friendsArray.map(async (friendId: any) => await fetchFriendInfo(token, friendId)) || [];
  const friendsInfo = await Promise.all(friendsInfoPromises);
  onSetFriends(friendsInfo);
};
