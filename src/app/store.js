// import { configureStore } from '@reduxjs/toolkit';
// import movieReducer from '../features/movie/movieSlice' ;
// import userSlice from '../features/user/userSlice';
// import userReducer from "../features/user/userSlice"

// export const store = configureStore({
//   reducer: {
//    movie : movieReducer,
//    //movie : movieSlice,
//     user : userSlice

//   },
// });
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';
import userSlice from '../features/user/userSlice';
import thunk from 'redux-thunk';

// ...

const middleware = [thunk, ...getDefaultMiddleware()];

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice,
  },
  middleware: middleware,
});

export default store;

