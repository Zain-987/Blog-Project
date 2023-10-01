import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './UserSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({user})
const persistConfig = {
  key: 'root',
  storage,
  version : 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware : (getDefaultMiddleware) => {
    return [...getDefaultMiddleware({
        serializableCheck : false,
    })]
  },
})

export const persistor = persistStore(store)
