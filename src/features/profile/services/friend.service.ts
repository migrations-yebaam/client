import { IResponse } from "../../../shared/shared.interface";
import { api } from "../../../store/api";

export const friendApi = api.injectEndpoints({
  endpoints: (build) => ({
    sendFriendRequest: build.mutation<IResponse, { userId: string }>({
      query: ({ userId }) => ({
        url: `user/friend/send`,
        method: 'POST',
        body: { userId }
      }),
    }),
    acceptFriendRequest: build.mutation<IResponse, { userId: string }>({
      query: ({ userId }) => ({
        url: `user/friend/accept`,
        method: 'PUT',
        body: { userId }
      }),
    }),
    rejectFriendRequest: build.mutation<IResponse, { userId: string }>({
      query: ({ userId }) => ({
        url: `user/friend/reject`,
        method: 'PUT',
        body: { userId }
      }),
    }),
    cancelFriendRequest: build.mutation<IResponse, { userId: string }>({
      query: ({ userId }) => ({
        url: `user/friend/cancel`,
        method: 'DELETE',
        body: { userId }
      }),
    }),
    getPendingFriends: build.query<IResponse, string>({
      query: (userId: string) => `user/friend/pending/${userId}`,
    }),
    getFriendsList: build.query<IResponse, string>({
      query: (userId: string) => `user/friend/list/${userId}`,
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
} = friendApi;
