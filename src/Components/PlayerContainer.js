import React from 'react';
import { useSelector } from 'react-redux';

export default function PlayerContainer() {
    const { playerOne, playerTwo } = useSelector((state) => state.game);
    return (
        <section>
            <h2>Player One:</h2>
            <input defaultValue={playerOne}></input>
            <h2>Player Two:</h2>
            <input defaultValue={playerTwo}></input>
        </section>
    )
}
