import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,

    reducers:{
        signUserStart: state => {
            state.isLoading = true
        },
        signUserSuccess: (state, action) => {
            state.isLoading = false
            state.loggedIn = true 
            state.user = action.payload
        },
        signUserFailure: (state, action) => {
            state.isLoading = false
            state.loggedIn = false
            state.error = action.payload
        },
        logoutUse: state => {
            state.user = null           
            state.loggedIn = false
        },
    }
})

export const { signUserStart, signUserFailure, signUserSuccess, logoutUse } = AuthSlice.actions;
export default AuthSlice.reducer;