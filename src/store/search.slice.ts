import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: [],
};

export const SearchSlice = createSlice({
  name: "Search",
  initialState: initialState,
  reducers: {
    search(state, action) {
      state.searchData = action.payload;
    },
  },
});

export const { reducer: searchReducer, actions: searchActions } = SearchSlice;
