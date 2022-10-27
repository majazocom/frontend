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
    initialState,
    reducers: {
        setPlayerOne: (state, action) => {
            const playerOneName = action.payload;
            state.playerOne = playerOneName;
        },
        setPlayerTwo: (state, action) => {
            const playerTwoName = action.payload;
            state.playerTwo = playerTwoName;
        },
        setPlayerTeam: (state, action) => {
            // payload: {player: playerTwo, characterToAdd: object}
            const player = action.payload.player;
            const characterToAdd = action.payload.characterToAdd;
            if (player === state.playerOne) {
                state.playerOneTeam = [...state.playerOneTeam, characterToAdd];
            }
        },
        setTeamAmount: (state, action) => {
            state.teamAmount = parseInt(action.payload);
        }
    }
});

console.log(gameSlice);

export const { setPlayerOne, setPlayerTwo, setPlayerTeam, setTeamAmount} = gameSlice.actions;

export default gameSlice.reducer;