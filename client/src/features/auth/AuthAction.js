import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api";
import { signUserFailure, signUserSuccess } from './../../features/user/authSlice';


// API endpoints
const REGISTER_ENDPOINT = `/register`;
const LOGIN_ENDPOINT = `/login`;
const LOGOUT_ENDPOINT = `/logout`;
const GETUSERS_ENDPOINT = `/users`;

export const getAllUsers = createAsyncThunk('auth/users', async () => {
  try {
    const { data } = await axios.get(GETUSERS_ENDPOINT);
    return data;
  } catch (error) {
    // Handle error (e.g., log it, dispatch an action, etc.)
    console.error("Error fetching users:", error);
    throw error;
  }
}); 

export const registerUser = createAsyncThunk("auth/register", async (userData, { dispatch }) => {
  try {
    const { data } = await axios.post(REGISTER_ENDPOINT, userData);
    // Foydalanuvchi ro'yxatdan o'tgan bo'lsa
    dispatch(signUserSuccess(data));
    return data;
  } catch (error) {
    // Xatolik bo'lganini foydalanuvchiga ko'rsatish
    const errorMessage = error.response ? error.response.data.message : "Server error";
    dispatch(signUserFailure(errorMessage));
    throw error;
  }
});

export const loginUser = createAsyncThunk("auth/login", async (userData, { dispatch }) => {
  try {
    const { data } = await axios.post(LOGIN_ENDPOINT, userData);
    dispatch(signUserSuccess(data))
    return data;
  } catch (error) {
    const errorMessage = error.message ? error.response.data.message : 'Server error';
    dispatch(signUserFailure(errorMessage))
    throw error;
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async ({ dispatch }) => {
  try {
    const { data } = await axios.post(LOGOUT_ENDPOINT);
    dispatch(signUserSuccess(data))
    return data;
  } catch (error) {
    const errorMessage = error.message ? error.response.data.message : 'Server error';
    dispatch(signUserFailure(errorMessage))
    throw error;
  }
});
