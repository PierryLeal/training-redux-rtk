import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increase: state => {
      state.value += 1
    },
    decrease: state => {
      state.value -= 1
    },
  },
  selectors: {
    getValue: state => state.value,
  },
})

export const { decrease, increase } = counterSlice.actions

export const { getValue } = counterSlice.selectors

export default counterSlice.reducer
