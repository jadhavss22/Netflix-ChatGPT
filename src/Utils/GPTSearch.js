import { createSlice } from "@reduxjs/toolkit";


const GptSearch = createSlice({
  name: "GPT",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const{toggleSearch}= GptSearch.actions
export default GptSearch