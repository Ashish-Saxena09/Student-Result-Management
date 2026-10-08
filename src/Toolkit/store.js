import { configureStore } from "@reduxjs/toolkit";
import reducer from "./StudentSlice";


const store = configureStore({
    reducer: {
        Student: reducer
    }
})

export default store;