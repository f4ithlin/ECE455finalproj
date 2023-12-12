// Header.js

import React from 'react';
import './Header.css'; // Make sure to create a corresponding Header.css file
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('authToken');
  const isLoggedIn = !!authToken;


  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  // Get today's date in the desired format (e.g., "December 1, 2023")

  const handleLoginButtonClick = () => {
    isLoggedIn ? navigate('/login') : navigate('/login');
  };

  return (
    <header className="site-header">

      <div className="utilities-container">
        <div className="info">
          <span className="date">{today}</span>
          <span className="today-paper">Today's Paw-per</span>
        </div>

        <div className="header-utilities">

          <span className="subscribe">
            <button>Subscribe for $1/Week</button>
          </span>
          <span className="login">
            <button onClick={handleLoginButtonClick}>
              {isLoggedIn ? 'My Account' : 'Log In'}
            </button>
          </span>

        </div>
      </div>

      <div className="header-content">

        <div className="logo">
          <img
            src="https://txt.1001fonts.net/img/txt/b3RmLjE5OC4wMDAwMDAuVkdobElFTmhkQ0JEYUhKdmJtbGpiR1Z6LjI/chomsky.regular.webp"
            alt="The New York Times Logo"
            className="logo-image"
          />
        </div>
      </div>


    </header>
  );
}

export default Header;
