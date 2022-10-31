import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    characters: []
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            console.log(action.payload);
            state.characters = action.payload;
        },
        removeCharacter: (state, action) => {
            let charactersArray = [...state.characters];
            // filter out removed character from array
            let id = charactersArray.findIndex((character) => character.id === action.payload);
            charactersArray.splice(id, 1);
            // set state to updated array
            state.characters = charactersArray;
        }
    }
})

console.log(charactersSlice);

export const {setCharacters, removeCharacter} = charactersSlice.actions;

export default charactersSlice.reducer;


