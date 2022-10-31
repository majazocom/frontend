import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { setTeamAmount } from '../slices/gameSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function TeamAmountComponent() {
    const { teamAmount } = useSelector((state) => state.game);
    const [newTeamAmount, setNewTeamAmount] = useState(teamAmount);
    const dispatch = useDispatch();
    return (
        <main>
            <h2>Amount of players in a team:</h2>
            <input type="number" onChange={(e) => setNewTeamAmount(e.target.value)} defaultValue={newTeamAmount}></input>
            <Link to="/chooseteam"><button onClick={() => { dispatch(setTeamAmount(newTeamAmount)) }}>NEXT</button></Link>
        </main>
    )
}
