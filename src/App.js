// Import the required modules
import React from 'react';
import './App.css';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'dark'}}>My FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
