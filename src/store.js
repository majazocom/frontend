import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/charactersSlice';
import gameReducer from './slices/gameSlice';

export const store = configureStore({
    reducer: {
        game: gameReducer,
        characters: charactersReducer
    },
});