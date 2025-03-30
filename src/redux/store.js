import { configureStore } from "@reduxjs/toolkit";
import DashboardSlice from "./dashboardSlice";
import UserSlice from "./userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      dashboard: DashboardSlice,
      user: UserSlice,
    },
  });
};
