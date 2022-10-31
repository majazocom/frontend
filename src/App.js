import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import PlayerContainer from './Components/PlayerContainer';
import TeamAmountComponent from './Components/TeamAmountComponent';
import { useDispatch } from 'react-redux';
import { setCharacters } from './slices/charactersSlice';
import Start from './Components/Start';
import ChooseTeamContainer from './Components/ChooseTeamContainer';
import Nav from './Components/Nav';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters() {
    const characters = await fetch('http://localhost:1337/characters');
    const res = await characters.json();
    dispatch(setCharacters(await res));
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/chooseplayers" element={<PlayerContainer />} />
          <Route path="/chooseteamamount" element={<TeamAmountComponent />} />
          <Route path="/chooseteam" element={<ChooseTeamContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
