import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import cityReducer from './citySlice'; 

const persistConfig = {
    key: 'root',
    storage,
};

const persistedCityReducer = persistReducer(persistConfig, cityReducer);

const store = configureStore({
    reducer: {
        city: persistedCityReducer, 
    },
});

const persistor = persistStore(store);

export { store, persistor };
