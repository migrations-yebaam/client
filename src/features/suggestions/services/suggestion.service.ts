import { api } from "../../../store/api";
import { IResponse, IUserDocument } from "../../profile/interfaces/friend.interface";

export const suggestionApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRandomUserSuggestions: build.query<IResponse<IUserDocument[]>, void>({
      query: () => ({
        url: `/user/profile/user/suggestions`,
        method: 'GET',
        credentials: 'include',
      }),
    }),
    searchUser: build.query<IResponse<IUserDocument[]>, { query: string }>({
      query: ({ query }) => ({
        url: `/user/profile/search/${query}`,
        method: 'GET',
        credentials: 'include',
      }),
    }),
    getProfileByUserId: build.query<IResponse<IUserDocument>, { userId: string }>({
      query: ({ userId }) => ({
        url: `/user/profile/${userId}`,
        method: 'GET',
        credentials: 'include',
      }),
    }),
    getAllUsers: build.query<IResponse<any>, { page: number }>({
      query: ({ page }) => ({
        url: `/user/all/${page}`,
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useGetRandomUserSuggestionsQuery,
  useSearchUserQuery,
  useGetProfileByUserIdQuery,
  useGetAllUsersQuery,
} = suggestionApi;
