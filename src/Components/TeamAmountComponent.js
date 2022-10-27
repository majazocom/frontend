import React from 'react'
import { useSelector } from 'react-redux';

export default function TeamAmountComponent() {
    const { teamAmount } = useSelector((state) => state.game);
    return (
        <article>
            <h2>Amount of players in a team:</h2>
            <input type="number" defaultValue={teamAmount}></input>
        </article>
    )
}
