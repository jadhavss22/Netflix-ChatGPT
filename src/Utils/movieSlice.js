import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
name : "movies",
initialState : {
    nowPlayingMovies : null,
    popularMovies : null,
    trailerVideo : null
},

reducers : {
    addNowPlayingMovies : (action, state) =>{
        state.nowPlayingMovies = action.payload
    },
    addPopularMovies : (action, state) =>{
        state.popularMovies = action.payload
    },
    addVideoTrailer: (state, action) => {
        state.trailerVideo = action.payload
    }
}
})

export const {addNowPlayingMovies, addVideoTrailer, addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer