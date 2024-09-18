// import { DECREMENT, INCREMENT, RESET } from "./ActionTypes";

// const initialState = {
//     count: 0
// };

// const countReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return { ...state, count: state.count + 1 };
//         case DECREMENT:
//             return { ...state, count: state.count - 1 };
//         case RESET:
//             return initialState;
//         default:
//             return state;
//     }
// };

// export default countReducer;

// -------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter1',
    initialState: { value: 0 },
    reducers: {
        increment: (state, action) => {
            state.value += action.payload;
        },
        decrement: (state, action) => {
            state.value -= action.payload;
        },
        reset: () => {
            return { value: 0 };
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;