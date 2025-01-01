import { createSlice } from "@reduxjs/toolkit";


const GptSearch = createSlice({
  name: "GPT",
  initialState: {
    showGptSearch: false,
    openAIMovies:null,
    tmdbMovieResult:null
  },
  reducers: {
    toggleSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies :(state,action)=>{
      const {openAIMovies,tmdbMovieResult} = action.payload
      state.openAIMovies = openAIMovies
      state.tmdbMovieResult = tmdbMovieResult
    }
  },
});

export const{toggleSearch,addGptMovies}= GptSearch.actions
export default GptSearch