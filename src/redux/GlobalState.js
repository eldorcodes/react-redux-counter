import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[]
}

const globalState = createSlice({
    name:'Global Data',
    initialState,
    reducers:{
        fetchData:(state) => {
            state.data.push({name:'John Doe'})
        }
    }
});
export const { fetchData } = globalState.actions;
export default globalState.reducer;