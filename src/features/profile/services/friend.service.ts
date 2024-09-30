import { api } from "../../../store/api";
import { ISentFriendRequestsResponse, IFriend, IResponse, IFriendRequest, IUserDocument } from "../interfaces/friend.interface";

export const friendApi = api.injectEndpoints({
    endpoints: (build) => ({
      sendFriendRequest: build.mutation<IResponse, { receiverId: string }>({
        query: ({ receiverId }) => ({
          url: `/friend/send`,
          method: 'POST',
          body: { receiverId }
        }),
      }),
      acceptFriendRequest: build.mutation<IResponse, { senderId: string }>({
        query: ({ senderId }) => ({
          url: `/friend/accept`,
          method: 'PUT',
          body: { senderId }
        }),
      }),
      rejectFriendRequest: build.mutation<IResponse, { senderId: string }>({
        query: ({ senderId }) => ({
          url: `/friend/reject`,
          method: 'PUT',
          body: { senderId }
        }),
      }),
      cancelFriendRequest: build.mutation<IResponse, { receiverId: string }>({
        query: ({ receiverId }) => ({
          url: `/friend/cancel`,
          method: 'DELETE',
          body: { receiverId }
        }),
      }),
      getPendingFriends: build.query<IResponse<ISentFriendRequestsResponse>, string>({
        query: (receiverId: string) => `/friend/pending/${receiverId}`,
      }),
      // getFriendsList: build.query<IResponse<IFriend[]>, string>({
      //   query: (userId: string) => `user/friend/list/${userId}`,
      // }),
      getFriendsSendRequests: build.query<IResponse<IFriendRequest[]>, void>({
        query: () => `/friend/sent-requests`,
      }),
      getFriendsList: build.query<IResponse<string[]>, string>({
        query: () => ({
          url: `/friends`,
          method: 'GET',
          credentials: 'include', 
        }),
      }),

      getSuggestedFriends: build.query<IResponse<IUserDocument[]>, void>({
        query: () => ({
          url: '/friend/suggest',
          method: 'GET',
          credentials: 'include',
        }),
      }),

      
    }),
  });
  
  export const {
    useSendFriendRequestMutation,
    useAcceptFriendRequestMutation,
    useRejectFriendRequestMutation,
    useCancelFriendRequestMutation,
    useGetPendingFriendsQuery,
    useGetFriendsListQuery,
    useGetFriendsSendRequestsQuery,
    useGetSuggestedFriendsQuery,

  } = friendApi;
  