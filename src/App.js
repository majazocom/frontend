import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

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
      <article>
        <input type="number" defaultValue={ teamAmount }></input>
      </article>
    </div>
  );
}

export default App;
