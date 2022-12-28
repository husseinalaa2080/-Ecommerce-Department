import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persist_reducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persist_reducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export {store, persistor};
