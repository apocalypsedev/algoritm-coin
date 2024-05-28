import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/user/authSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})