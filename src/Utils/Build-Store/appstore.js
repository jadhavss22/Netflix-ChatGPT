import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../movieSlice"
 import userReducer from "../UserSlice";
 import gptReducer from "../GPTSearch";
 import configReducer from"../configSlice"
const appStore = configureStore({
  // configureStore comes from Redux.js toolkit. It ktake reducer and it have different reducers from diff slices.
   
  reducer: {
    
   user: userReducer,
   movie : movieReducer,
   gpt : gptReducer,
   config : configReducer
  },
});

export default appStore;
