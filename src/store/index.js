import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createSecureStore from '@neverdull-agency/expo-unlimited-secure-store';

// Reducers
import authReducer from './auth/reducers';
import profileReducer from './profile/reducers';
import listingReducer from './listing/reducers';
import bookingReducer from './booking/reducers';

const storage = createSecureStore();

const rootReducer = combineReducers({
  auth: persistReducer(
    {
      key: 'auth',
      blacklist: ['loading', 'error'],
      storage,
    },
    authReducer,
  ),
  profile: persistReducer(
    {
      key: 'profile',
      blacklist: ['loading', 'error'],
      storage,
    },
    profileReducer,
  ),
  listing: persistReducer(
    {
      key: 'listing',
      blacklist: ['profiles', 'loading', 'error'],
      storage,
    },
    listingReducer,
  ),
  booking: bookingReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['booking'],
};

const persistRed = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistRed,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistedStore = persistStore(store);

export default store;
