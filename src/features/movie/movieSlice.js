import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: [],
  popular: [],
  original: [],
  trending: [],
  //watchlist: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.popular = action.payload.popular;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
    // setWatchlist: (state, action) => {
    //   state.watchlist = action.payload.watchlist;
    // },
  },
});

export const { setMovies } = movieSlice.actions;
//export const { setMovies, setWatchlist } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectPopular = (state) => state.movie.popular;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
//export const selectWatchlist = (state) => state.movie.watchlist;

export default movieSlice.reducer;
