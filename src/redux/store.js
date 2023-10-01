import { configureStore } from '@reduxjs/toolkit'
import user from './UserSlice'

const store = configureStore({
  reducer: {  user  },
  middleware : (getDefaultMiddleware) => {
    return [...getDefaultMiddleware({
        serializableCheck : false,
    })]
  },
})
export default store