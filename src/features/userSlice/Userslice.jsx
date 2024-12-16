import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      const userId = action.payload;
      return state.filter((value) => value.id !== userId);
    },
  },
});

export const { add, removeItem } = userSlice.actions;
export default userSlice.reducer;
