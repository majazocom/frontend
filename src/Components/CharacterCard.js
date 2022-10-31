import React from 'react'

export default function CharacterCard(props) {
    const { player, id, name, description, img } = props;

    function addToTeam() {
        console.log(player);
        console.log(id);
        console.log(img);
    }
    return (
        <article className='character-card'>
            <figure className='character-image' style={{backgroundImage: "url(" + `./svgs/${img}.svg` + ")"}}></figure>
            <section className='character-desc'>
                <h3>{name.toUpperCase()}</h3>
                <p>{description}</p>
                <button className='character-add-button' onClick={addToTeam}>ADD TO TEAM</button>
            </section>
        </article>
    )
}
