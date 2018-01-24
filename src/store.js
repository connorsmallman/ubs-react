import { compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
import * as reducers from './modules';

const rootReducer = combineReducers({
  ...reducers
});

const persistConfig = {
  key: 'rectangles',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
