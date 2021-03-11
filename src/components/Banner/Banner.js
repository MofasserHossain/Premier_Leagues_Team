import React from 'react';
import './Banner.css';
import banner from '../../banner.jpg';
const background = {
  backgroundImage: `url(${banner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '40vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const Banner = () => {
  return (
    <div style={background} className="banner">
      <h3>Premier League Teams</h3>
    </div>
  );
};

export default Banner;
