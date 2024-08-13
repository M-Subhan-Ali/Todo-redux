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
    Remove:(state,action)=>{
    state.list=state.list.filter((item,id)=>id!==action.payload);
    },
    Edit:(state,action)=>{
      const {value,index}=action.payload;
      state.list[index]=value;
    }
      
  },
});
export const { Submit,Remove,Edit } = Todoslice.actions;
export default Todoslice.reducer;
