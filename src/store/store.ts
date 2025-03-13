import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./slice/counterSlice"
import { queryApi } from "./services/querys"

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [queryApi.reducerPath]: queryApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(queryApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
