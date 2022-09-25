import { createSlice } from "@reduxjs/toolkit";
import { ICartCount } from "../types/cartCount.types";

export const initialState = {
  cartCount: [] as ICartCount[],
};

export const cartCountSlice = createSlice({
  name: "Cart Count",
  initialState: initialState,
  reducers: {
    cartCount(state, action) {
      if (state.cartCount.length > 0) {
        for (let index = 0; index < state.cartCount.length; index++) {
          const element = state.cartCount[index];
          if (element.title === action.payload.title) {
            state.cartCount.splice(index, 1);
          }
        }
        state.cartCount.push(action.payload);
      } else {
        state.cartCount.push(action.payload);
      }
      state.cartCount.sort(function (a: ICartCount, b: ICartCount) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    },
  },
});
export const { reducer: cartCountReducer, actions: cartCountActions } =
  cartCountSlice;
