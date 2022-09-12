import { configureStore } from "@reduxjs/toolkit";

import timeBoxSlice from "scene/TimeBox/slice/slice";

const reducer = { timeBox: timeBoxSlice };

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
