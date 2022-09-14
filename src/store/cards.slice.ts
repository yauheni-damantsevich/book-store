import { createSlice } from "@reduxjs/toolkit";
import { getCards } from "../api/fetchCards";
import { APIstatus } from "../types/api.types";

const initialState = {
  cardStatus: { status: APIstatus.IDLE },
  cardData: {},
};

export const fetchCardSlice = createSlice({
  name: "Fetch Posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.cardStatus.status = APIstatus.PENDING;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.cardStatus.status = APIstatus.FULFILLED;
        state.cardData = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.cardStatus.status = APIstatus.REJECTED;
      });
  },
});

export const { reducer: cardReducer, actions: cardActions } = fetchCardSlice;
