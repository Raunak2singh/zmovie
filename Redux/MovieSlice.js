import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const STATUSES =Object.freeze({
    IDLE :'idle',
    ERROR : 'error',
    LOADING : 'loading'
})


const MoviesSlice = createSlice({
    name:'Movies',
    initialState :{
        data : [],
        status : STATUSES.IDLE,

    },
    reducers :{

    },

    extraReducers: (builder) => {
        builder
            .addCase(featchMovies.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(featchMovies.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(featchMovies.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },


})


export const {setMovies,setStatus} = MoviesSlice.actions;
export default MoviesSlice.reducer

// Thunk
export const featchMovies = createAsyncThunk('/', async (page = 1) => {
    const res = await fetch(`https://movie-task.vercel.app/api/popular?page=${page}`);
    const data = await res.json();
    return data.data;
});


