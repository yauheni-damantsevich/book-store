import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIError, APIstatus } from "../types/api.types";
import { getExceptionPayload, publicRequest } from "./service";

export const getCards = createAsyncThunk<
  Response,
  void,
  { rejectValue: APIError }
>("https://api.itbook.store/1.0/new", async (_, { rejectWithValue }) => {
  try {
    const response = await publicRequest.get<Response>("new", {
      params: {
        _limit: 100,
      },
    });
    const data = response.data;
    return data;
  } catch (ex) {
    return rejectWithValue(getExceptionPayload(ex));
  }
});

export const initialState = {
  fetchPosts: { status: APIstatus.IDLE },
};
