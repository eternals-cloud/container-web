import { createSlice } from "@reduxjs/toolkit";

interface TwoFactorAuthInterface {
  two_factor_auth: boolean;
  user: string;
  username: string;
  first_name: string;
  email: string;
  mobile: string;
  time: string;
}

const initialState: TwoFactorAuthInterface = {
  two_factor_auth: false,
  user: "",
  username: "",
  first_name: "",
  email: "",
  mobile: "",
  time: "",
};

const twoFactorAuthSlice = createSlice({
  name: "two_factor_auth",
  initialState,
  reducers: {
    setLoginInfo: (state, action) => {
      state.two_factor_auth = action.payload.two_factor_auth;
      state.user = action.payload.user;
      state.username = action.payload.username;
      state.first_name = action.payload.first_name;
      state.email = action.payload.email;
      state.mobile = action.payload.mobile;
      state.time = action.payload.time;
    },
    clearLoginInfo: (state) => {
      state.two_factor_auth = false;
      state.user = "";
      state.username = "";
      state.first_name = "";
      state.email = "";
      state.mobile = "";
      state.time = "";
    },
  },
});

export const { setLoginInfo, clearLoginInfo } = twoFactorAuthSlice.actions;
export default twoFactorAuthSlice.reducer;
