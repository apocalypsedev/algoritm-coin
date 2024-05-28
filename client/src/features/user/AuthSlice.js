import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    // Metodlar yoziladigan reduserlar:
    reducers: {

        // Register va Login 
        signUserStart: state => {
            state.isLoading = true
        },
        signUserSuccess: (state, action ) => {
            state.isLoading = false
            state.loggedIn = true
            state.user = action.payload
        },
        signUserFailure:( state, action )=> {
            state.isLoading = false
            state.loggedIn = false
            state.error = action.payload
        },

        logoutUser: state => {
            state.user = null
            state.loggedIn = false
        }

    }
})

export const {signUserStart, signUserFailure,signUserSuccess, logoutUser} = authSlice.actions
export default authSlice.reducer

