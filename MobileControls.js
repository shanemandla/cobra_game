import React from 'react';
import './MobileControls.css';

const MobileControls = ({ onControl }) => (
  <div className="mobile-controls">
    <div className="mobile-btn up-btn" onClick={() => onControl('up')}>↑<span className="control-label">UP</span></div>
    <div className="mobile-btn left-btn" onClick={() => onControl('left')}>←<span className="control-label">LEFT</span></div>
    <div className="mobile-btn down-btn" onClick={() => onControl('down')}>↓<span className="control-label">DOWN</span></div>
    <div className="mobile-btn right-btn" onClick={() => onControl('right')}>→<span className="control-label">RIGHT</span></div>
  </div>
);

export default MobileControls;