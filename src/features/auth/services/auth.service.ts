

import { IResponse } from '../../../shared/shared.interface';
import { api } from '../../../store/api';
import { ISignInPayload, ISignUpPayload } from '../interfaces/auth.interface';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<IResponse, ISignUpPayload>({
      query(body: ISignUpPayload) {
        return {
          url: '/signup',
          method: 'POST',
          body
        };
      }
    }),
    signIn: build.mutation<IResponse, ISignInPayload>({
      query(body: ISignInPayload) {
        return {
          url: '/signin',
          method: 'POST',
          body
        };
      }
    }),
    logout: build.mutation<IResponse, void>({
      query() {
        return {
          url: '/signout',
          method: 'GET'
        };
      }
    }),
    
    resendEmail: build.mutation<IResponse, { userId: number; email: string }>({
      query(data) {
        return {
          url: 'auth/resend-email',
          method: 'POST',
          body: data
        };
      }
    }),
    verifyEmail: build.mutation<IResponse, string>({
      query(token: string) {
        return {
          url: 'auth/verify-email',
          method: 'PUT',
          body: { token }
        };
      }
    }),

    forgotPassword: build.mutation<IResponse, string>({
      query(email: string) {
        return {
          url: 'auth/forgot-password',
          method: 'PUT',
          body: { email }
        };
      }
    }),
    resetPassword: build.mutation<IResponse, { password: string; confirmPassword: string; token: string }>({
      query(data) {
        return {
          url: `auth/reset-password/${data.token}`,
          method: 'PUT',
          body: data
        };
      }
    }),
    checkCurrentUser: build.query<IResponse, void>({
      query: () => '/currentuser'
    }),
    getLoggedInUser: build.query<IResponse, void>({
      query: () => '/logged-in-user'
    }),
    removeLoggedInUser: build.mutation<IResponse, string>({
      query(username: string) {
        return {
          url: `/logged-in-user/${username}`,
          method: 'DELETE'
        };
      }
    })
  })
});

export const {
  useCheckCurrentUserQuery,
  useGetLoggedInUserQuery,
  useSignUpMutation,
  useSignInMutation,
  useRemoveLoggedInUserMutation,
  useLogoutMutation,
  useResendEmailMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation
} = authApi;
