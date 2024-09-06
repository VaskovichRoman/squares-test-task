import { configureStore } from '@reduxjs/toolkit';
import squaresReducer from './squaresSlice';

export const store = configureStore({
    reducer: {
        squares: squaresReducer,
    },
});
