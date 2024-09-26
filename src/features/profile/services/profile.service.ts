import { api } from "../../../store/api";
import { IResponse } from "../interfaces/friend.interface";

export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<IResponse, void>({
      query: () => `user/profile`,
    }),
    getProfileById: build.query<IResponse, string>({
      query: (userId: string) => `user/profile/${userId}`,
    }),
    getProfilePosts: build.query<IResponse, { username: string; userId: string; uId: string }>({
      query: ({ username, userId, uId }) => `user/profile/posts/${username}/${userId}/${uId}`,
    }),
    searchUser: build.query<IResponse, string>({
      query: (query: string) => `user/profile/search/${query}`,
    }),
    changePassword: build.mutation<IResponse, { newPassword: string }>({
      query: ({ newPassword }) => ({
        url: `user/profile/change-password`,
        method: 'PUT',
        body: { newPassword }
      }),
    }),
    updateBasicInfo: build.mutation<IResponse, { info: any }>({
      query: ({ info }) => ({
        url: `user/profile/basic-info`,
        method: 'PUT',
        body: info
      }),
    }),
    getUserSuggestions: build.query<IResponse, void>({
      query: () => `user/profile/user/suggestions`,
    }),
    // Nuevas rutas faltantes
    getAllUsers: build.query<IResponse, number>({
      query: (page: number) => `user/all/${page}`,
    }),
    updateProfileDetails: build.mutation<IResponse, { details: any }>({
      query: ({ details }) => ({
        url: `user/profile/basic-detail`,
        method: 'PUT',
        body: details,
      }),
    }),
    updateSocialLinks: build.mutation<IResponse, { socialLinks: any }>({
      query: ({ socialLinks }) => ({
        url: `user/profile/social-links`,
        method: 'PUT',
        body: socialLinks,
      }),
    }),
    updateSettings: build.mutation<IResponse, { settings: any }>({
      query: ({ settings }) => ({
        url: `user/profile/settings`,
        method: 'PUT',
        body: settings,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetProfileByIdQuery,
  useGetProfilePostsQuery,
  useSearchUserQuery,
  useChangePasswordMutation,
  useUpdateBasicInfoMutation,
  useGetUserSuggestionsQuery,
  useGetAllUsersQuery, 
  useUpdateProfileDetailsMutation, 
  useUpdateSocialLinksMutation, 
  useUpdateSettingsMutation, 
} = profileApi;
