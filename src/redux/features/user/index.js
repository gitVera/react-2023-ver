import { STATUSES } from "@/constants/statuses";
import { fetchUsersIfNotExist } from "@/redux/features/user/thunks/fetchUsersIfNotExisted";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const userEntityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState({
    loadingStatus: STATUSES.idle,
  }),
  extraReducers: {
    //
  },
});

export const userSelectors = userEntityAdapter.getSelectors();
export const userReducer = userSlice.reducer;
