import { createSlice } from '@reduxjs/toolkit';

import { initialAuthUserValues } from '../../../shared/utils/static-data';


const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthUserValues,
  reducers: {
      addAuthUser: (state, action) => {
          const { authInfo } = action.payload;
          return {
              ...state,
              ...authInfo,  
              bgImageId: authInfo.bgImageId || state.email,  // Ejemplo de defaulting
              user: authInfo.user || state.username,  // Ejemplo de defaulting
          };
      },
      clearAuthUser: () => initialAuthUserValues,
  }
});

export const { addAuthUser, clearAuthUser } = authSlice.actions;
export default authSlice.reducer;
