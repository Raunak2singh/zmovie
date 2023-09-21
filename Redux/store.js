import { configureStore } from "@reduxjs/toolkit";
import FavReducer from './FavSlice'
import MoviesReducer from './MovieSlice'
const store = configureStore({
    reducer :{
        fav : FavReducer,
        Movies : MoviesReducer,
    }
})


export default store;