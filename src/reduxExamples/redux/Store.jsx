import { configureStore } from "@reduxjs/toolkit";
import CounterState from "./CounterState";

export const Store = configureStore({
    reducer:{
        count:CounterState
    }
});

Store.subscribe(() => {
    let storeState = Store.getState();
    console.log('storeState',storeState);
    console.log('Successfully subscribed for Store');
});