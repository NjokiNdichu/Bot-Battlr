import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './Style.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    }).then(() => {
      setBots(bots.filter(b => b.id !== bot.id));
      removeFromArmy(bot);
    }).catch(error => console.error('Error discharging bot:', error));
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" className="nav-link">Bot Collection</Link>
          <Link to="/army" className="nav-link">My Army</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BotCollection bots={bots} addToArmy={addToArmy} dischargeBot={dischargeBot} />} />
          <Route path="/army" element={<YourBotArmy army={army} removeFromArmy={removeFromArmy} dischargeBot={dischargeBot} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
