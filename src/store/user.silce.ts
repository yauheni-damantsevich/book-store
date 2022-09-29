import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

export const userSlice = createSlice({
  name: "User Data",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
    },
    logout: (state) => {
      state.userData = null;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
