import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const Todoslice = createSlice({
  name: "list",
  initialState,
  reducers: {
    Submit: (state, action) => {
      state.list.push(action.payload);
    },
  },
});
export const { Submit } = Todoslice.actions;
export default Todoslice.reducer;
