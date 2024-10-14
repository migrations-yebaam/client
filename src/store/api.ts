/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { getDataFromSessionStorage } from '../shared/utils/utils.service';

// const BASE_ENDPOINT = import.meta.env.VITE_BASE_ENDPOINT;
// const BASE_ENDPOINT = 'https://api.serversocial.xyz';
const BASE_ENDPOINT = 'http://localhost:5000';

// https://api.serversocial.xyz
const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_ENDPOINT}/api/v1`,
  prepareHeaders: (headers:any) => {
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    return headers;
  },
  credentials: 'include'
});

const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args:any, api:any, extraOptions:any) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const loggedInUsername: string = getDataFromSessionStorage('loggedInuser');
    await baseQuery(`/refresh-token/${loggedInUsername}`, api, extraOptions);
  }
  return result;
};

export const api = createApi({
  reducerPath: 'clientApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({})
});
