import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'countt',
    initialState: {value: 0},
    reducers: {
        increment: (state, action) => {
            state.value += 1;
        },
        decrement: (state, action) => {
            state.value -= 1;
        },
        reset: () => {
            return { value: 0};
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;