import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Counter';
import globalStateReducer from './GlobalState';

export const store = configureStore({
    reducer:{
        count:counterReducer,
        stateData:globalStateReducer
    }
});

store.subscribe(() => console.log('Store getState',store.getState()));
