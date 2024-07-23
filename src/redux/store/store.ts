import { configureStore } from "@reduxjs/toolkit";
import AuthSlices from "../slices/AuthSlice";
import TwoFactorAuthSlice from "../slices/TwoFactorAuthSlice";

const store = configureStore({
  reducer: {
    authReducer: AuthSlices,
    twoFactorAuthSlice: TwoFactorAuthSlice,
  },
});

export default store;
