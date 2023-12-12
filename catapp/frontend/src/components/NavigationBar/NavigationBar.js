import React from 'react';
import './NavigationBar.css';


function NavigationBar() {
  return (
    <nav className="nyt-nav">
        


      <ul className="nyt-nav-list">
        <li className="nyt-nav-item"><a href="#">U.S.</a></li>
        <li className="nyt-nav-item"><a href="#">World</a></li>
        <li className="nyt-nav-item"><a href="#">Business</a></li>
        <li className="nyt-nav-item"><a href="#">Arts</a></li>
        <li className="nyt-nav-item"><a href="#">Lifestyle</a></li>
        <li className="nyt-nav-item"><a href="#">Opinion</a></li>
        <li className="nyt-nav-item"><a href="#">Audio</a></li>
        <li className="nyt-nav-item"><a href="#">Games</a></li>
        <li className="nyt-nav-item"><a href="#">Cooking</a></li>

      </ul>
    </nav>
  );
}

export default NavigationBar;
