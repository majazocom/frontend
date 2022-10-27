import React from 'react'
import { useSelector } from 'react-redux'

export default function TeamContainer() {
    const { playerOne, playerTwo, playerOneTeam, playerTwoTeam } = useSelector((state) => state.game);
    return (
        <section>
            <h2>{playerOne === "" ? "Player One" : playerOne} Team</h2>
            <ul className='teamList'>
                {playerOneTeam.length > 0 ? playerOneTeam.map((player) => <li>{player.name}</li>) : null}
            </ul>
            <h2>{playerTwo === "" ? "Player Two" : playerOne} Team</h2>
            <ul className='teamList'>
                {playerTwoTeam.length > 0 ? playerTwoTeam.map((player) => <li>{player.name}</li>) : null}
            </ul>
        </section>
    )
}
