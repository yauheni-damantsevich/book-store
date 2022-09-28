import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountData: {},
};

export const accountSlice = createSlice({
  name: "Account Data",
  initialState: initialState,
  reducers: {},
});
