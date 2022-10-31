import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPlayerOne, setPlayerTwo } from '../slices/gameSlice';

export default function PlayerContainer() {
    const { playerOne, playerTwo } = useSelector((state) => state.game);
    const [playerOneName, setPlayerOneName] = useState(playerOne);
    const [playerTwoName, setPlayerTwoName] = useState(playerTwo);
    const dispatch = useDispatch();

    function goNext() {
        dispatch(setPlayerOne(playerOneName))
        dispatch(setPlayerTwo(playerTwoName))
    }

    return (
        <main>
            <section>
                <article>
                    <h2>{playerOneName}:</h2>
                    <input defaultValue={playerOne} onChange={(e) => setPlayerOneName(e.target.value)}></input>
                </article>
                <article>
                    <h2>Player 2:</h2>
                    <input defaultValue={playerTwo} onChange={(e) => setPlayerTwoName(e.target.value)}></input>
                </article>
            </section>
            <Link to="/chooseteamamount"><button onClick={goNext}>NEXT</button></Link>
        </main>
    )
}
