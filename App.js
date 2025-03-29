import React, { useState } from 'react';
import './App.css';
import SplashScreen from './components/SplashScreen';
import GameContainer from './components/GameContainer';
import GameInfo from './components/GameInfo';
import MobileControls from './components/MobileControls';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);

  const startGame = () => {
    setGameStarted(true);
    // Initialize game state and logic here...
  };

  const handleControl = (direction) => {
    // Handle mobile control input...
  };

  return (
    <div className="app">
      {!gameStarted && <SplashScreen onStart={startGame} />}
      {gameStarted && (
        <>
          <h1>COBRA</h1>
          <GameContainer />
          <GameInfo score={score} level={level} lives={lives} />
          <MobileControls onControl={handleControl} />
          <div className="logo">shanecore_systems™</div>
        </>
      )}
    </div>
  );
};

export default App;