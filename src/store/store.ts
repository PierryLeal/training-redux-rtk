import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./slice/counterSlice"
import { digimonApi } from "./services/digimon"

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [digimonApi.reducerPath]: digimonApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(digimonApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
