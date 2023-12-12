import React from 'react';
import './MainNewsSection.css';
import { Link } from 'react-router-dom';

function MainNewsSection() {
  return (
    <div className="nyt-main-news-section">
      <Link to="/mainArticle" className="main-article-link">
        <div className="nyt-main-article">
          <div className="nyt-main-article-content">
            <h3 className="nyt-main-article-title">
              Cat of the Month Spotlight: Nami
            </h3>
            <p className="nyt-main-article-summary">
              Cats are wacky, humans too,
              They'd grin at us, we'd laugh, woo-hoo!
              In this playful dance, a joyful spree,
              Silliness unites us, wild and free!
            </p>
            <div className="nyt-main-article-sub">
              Honorable mentions: Tom, Angela, Marie, Scrapper
            </div>
            <div className="nyt-main-article-metadata">
              <p className="nyt-main-article-read-time">3 MIN READ</p>
            </div>
          </div>
          
          <img src="../catCabinFlight.png" alt="Cat wandering in cabin" class="nyt-main-article-image" />
        </div>
      </Link>

    

      {/* Add more MainNewsArticle components here */}
    </div>
  );
}

export default MainNewsSection;
