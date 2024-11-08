import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'
import rootReducer from './rootReducer'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
let storeEnhancers = thunk

if (process.env.ENV === 'DEV') {
  storeEnhancers = composeWithDevTools(thunk)
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: [storeEnhancers]
})
const persistor = persistStore(store)

export { store, persistor }
