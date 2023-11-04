import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../View/AfterAuth/Home/homeSlice'
import dashboardSlice from '../View/AfterAuth/Dashboard/dashboardSlice'
export const store = configureStore({
  reducer: {
    home: homeSlice,
    dashboard:dashboardSlice,
    
  },
})