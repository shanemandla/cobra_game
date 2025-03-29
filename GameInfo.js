import React from 'react';
import './GameInfo.css';

const GameInfo = ({ score, level, lives }) => (
  <div className="game-info">
    <div>Score: <span>{score}</span></div>
    <div>Level: <span>{level}</span></div>
    <div>Lives: <span>{lives}</span></div>
  </div>
);

export default GameInfo;