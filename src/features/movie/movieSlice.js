// import { createSlice } from "@reduxjs/toolkit"

// const initialState ={
//     movies :[],
// }

// const movieSlice = createSlice({
//     name: "movie",
//     initialState,
    
//     reducers : {
//         setMovies :(state , action) =>{
//             state.movies = action.payload.movies;
//         }
//     }
// })

// export const {setMovies} = movieSlice.actions;

// export const selectmovie = (state) => state.movie.movies;

// export default movieSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  //newDisney: null,
 // newto: null,
  popular:null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({ 
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      //state.newDisney = action.payload.newDisney;
      //state.newto = action.payload.newto;
      state.popular = action.payload.popular;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
//export const selectNewto = (state) => state.movie.newto;
export const selectPopular = (state) => state.movie.popular;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;