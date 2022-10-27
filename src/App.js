import './App.css';
import { useState } from 'react';
import PlayerContainer from './Components/PlayerContainer';
import TeamContainer from './Components/TeamContainer';
import TeamAmountComponent from './Components/TeamAmountComponent';

function App() {
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
      <TeamAmountComponent />
      <TeamContainer />
    </div>
  );
}

export default App;
