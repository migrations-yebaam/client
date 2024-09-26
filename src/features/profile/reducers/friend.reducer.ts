import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FriendRequestState {
  sentRequests: string[];  // IDs de los usuarios a los que se enviaron solicitudes
  receivedRequests: string[];  // IDs de los usuarios que enviaron solicitudes
  friendsList: string[];  // IDs de amigos confirmados
}

const initialFriendRequestState: FriendRequestState = {
  sentRequests: [],
  receivedRequests: [],
  friendsList: [],
};

const friendRequestSlice = createSlice({
  name: 'friendRequest',
  initialState: initialFriendRequestState,
  reducers: {
    addSentFriendRequest: (state, action: PayloadAction<string>) => {
      state.sentRequests.push(action.payload);  // Agrega la solicitud enviada
    },
    addReceivedFriendRequest: (state, action: PayloadAction<string>) => {
      state.receivedRequests.push(action.payload);  // Agrega la solicitud recibida
    },
    removeReceivedFriendRequest: (state, action: PayloadAction<string>) => {
      state.receivedRequests = state.receivedRequests.filter(
        (id) => id !== action.payload
      );
    },
    acceptFriendRequest: (state, action: PayloadAction<string>) => {
      const friendId = action.payload;
      state.friendsList.push(friendId);
      state.receivedRequests = state.receivedRequests.filter((id) => id !== friendId); // Quita la solicitud recibida aceptada
    },
    removeSentFriendRequest: (state, action: PayloadAction<string>) => {
      state.sentRequests = state.sentRequests.filter(
        (id) => id !== action.payload
      );
    },
    clearFriendRequests: () => initialFriendRequestState,
  },
});

export const {
  addSentFriendRequest,
  addReceivedFriendRequest,
  removeReceivedFriendRequest,
  acceptFriendRequest,
  removeSentFriendRequest,
  clearFriendRequests,
} = friendRequestSlice.actions;

export default friendRequestSlice.reducer;
