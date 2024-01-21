import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:0
}

const counterState = createSlice({
    name:'Count',
    initialState,
    reducers:{
        increment:(state) => {
            state.value += 1
        },
        decrement:(state) => {
            state.value -= 1
        }
    }
});

export const { increment, decrement } = counterState.actions;

export default counterState.reducer;
