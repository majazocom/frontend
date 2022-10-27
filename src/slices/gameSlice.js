import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    playerOne: "",
    playerTwo: "",
    playerOneTeam: [],
    playerTwoTeam: [],
    teamAmount: 1,
    winner: ""
};

const gameSlice = createSlice({
    name: 'game',
    initialState
});

console.log(gameSlice);

export default gameSlice.reducer;