import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { setPlayerOne, setPlayerTwo } from '../slices/gameSlice';

export default function PlayerContainer() {
    const { playerOne, playerTwo } = useSelector((state) => state.game);
    const [playerOneName, setPlayerOneName] = useState(playerOne);
    const [playerTwoName, setPlayerTwoName] = useState(playerTwo);
    const dispatch = useDispatch();

    return (
        <section>
            <h2>Player One:</h2>
            <input defaultValue={playerOne} onChange={(e) => setPlayerOneName(e.target.value)}></input>
            <button onClick={() => {dispatch(setPlayerOne(playerOneName))}}>Enter</button>
            <h2>Player Two:</h2>
            <input defaultValue={playerTwo} onChange={(e) => setPlayerTwoName(e.target.value)}></input>
            <button onClick={() => {dispatch(setPlayerTwo(playerTwoName))}}>Enter</button>
        </section>
    )
}
