import React, { useRef, useEffect } from 'react';
import './GameContainer.css';

const GameContainer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // Initialize game logic here...
  }, []);

  return (
    <div className="game-container">
      <img id="background" src="https://assets.onecompiler.app/43af7ep2e/43d6g9qhx/IMG-20250305-WA0031.jpg" alt="Background" />
      <canvas id="gameCanvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default GameContainer;