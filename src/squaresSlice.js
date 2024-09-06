import { createSlice } from '@reduxjs/toolkit';

export const squaresSlice = createSlice({
    name: 'squares',
    initialState: {
        squares: [],
    },
    reducers: {
        addSquare: (state, action) => {
            state.squares.unshift(action.payload);
        },
        removeSquare: (state) => {
            state.squares.pop();
        },
    },
});

export const { addSquare, removeSquare } = squaresSlice.actions;

export default squaresSlice.reducer;
