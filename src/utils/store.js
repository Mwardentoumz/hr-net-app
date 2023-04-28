// create a store to handle the state of the application. It should have a users array and a currentUser object with an ID and a name. The currentUser object should be initialized to null.

// imports
import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../utils/employeeSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import storage from "redux-persist/lib/storage";


// STATE INITIALIZATION



const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, employeeSlice);

export const store = configureStore({
        reducer: {
            employee: persistedReducer,
        },
            middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
               serializableCheck: {
                  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
               },
            }),
        
    });

export const persistor = persistStore(store);
    