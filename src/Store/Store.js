import {configureStore} from "@reduxjs/toolkit";
import TodoSlice from "../Feature/TodoSlice";

 const store=configureStore({
    reducer:{
        Todo:TodoSlice
    }
})

export default store;