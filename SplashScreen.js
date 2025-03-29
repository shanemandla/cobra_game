import React from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onStart }) => (
  <div id="splash">
    <div id="splash-content">
      <h2>COBRA</h2>
      <p>shanecore_systems™</p>
      <button id="startButton" onClick={onStart}>START GAME</button>
    </div>
  </div>
);

export default SplashScreen;