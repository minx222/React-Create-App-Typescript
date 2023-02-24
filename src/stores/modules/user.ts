<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
const userStore = createSlice({
  name: "counter",
  initialState: {
    count: 1,
  },
  reducers: {
    add(state) {
      state.count++;
    },
  },
});
const { add } = userStore.actions;
const reducer = userStore.reducer;

export { add };
// 导出reducer
export default reducer;
=======
import { createSlice } from '@reduxjs/toolkit'
const userStore = createSlice({
  name: 'counter',
  initialState: {
    count: 1
  },
  reducers: {
    add(state) {
      state.count++
    }
  }
})
const { add } = userStore.actions
const reducer = userStore.reducer

export { add }
export default reducer
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
