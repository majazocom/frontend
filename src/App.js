import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PlayerContainer from './Components/PlayerContainer';
import TeamContainer from './Components/TeamContainer';

function App() {
  const {teamAmount} = useSelector((state) => state.game);
  const [characters, setCharacters] = useState([]);
  function getCharacters() {
    fetch('http://localhost:1337/characters')
      .then(res => res.json())
      .then(data => setCharacters(data))
  }
  return (
    <div className="App">
      <button onClick={getCharacters}>HEJ</button>
      {characters ? characters.map((character) => <div>{character.name}</div>) : null}
      <PlayerContainer />
      <article>
        <input type="number" defaultValue={ teamAmount }></input>
      </article>
      <TeamContainer />
    </div>
  );
}

export default App;
