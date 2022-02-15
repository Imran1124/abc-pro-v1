import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducers from './rootReducers';

const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false
        })
});

const { dispatch, getState } = store;

const persistor = persistStore(store);

export { store, persistor, dispatch, getState }
