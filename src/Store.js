import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './features/userSlice/Userslice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})