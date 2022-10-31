import React from 'react'
import { useSelector } from 'react-redux'
import CharacterCard from './CharacterCard'

export default function ChooseTeamContainer() {
    const { characters } = useSelector((state) => state.characters);
    const { teamAmount, playerOne, playerTwo } = useSelector((state) => state.game);
    console.log(characters);
    return (
        <main>
            <h2>Choose a character:</h2>
            <p>Choose {teamAmount}</p>
            <section className='choose-characters-container'>
            <article className='choose-team-container player-one'>
                <h3>TEAM {playerOne.toUpperCase()}</h3>
                {characters.length > 0 ? characters.map((character, index) =>
                    <CharacterCard
                        key={index}
                        player="playerOne"
                        id={character.id}
                        name={character.name}
                        description={character.speciality}
                        img={character.imgName}
                    />) : null}
            </article>
            <article className='choose-team-container player-two'>
                <h3>TEAM {playerTwo.toUpperCase()}</h3>
                {characters.length > 0 ? characters.map((character, index) =>
                    <CharacterCard
                        key={index}
                        player="playerTwo"
                        id={character.id}
                        name={character.name}
                        description={character.speciality}
                        img={character.imgName}
                    />) : null}
            </article>
            </section>
        </main>
    )
}
