// SideNewsSection.js

import React from 'react';
import './SideNewsSection.css';
import { Link } from 'react-router-dom';

function SideNewsSection() {
  return (
    <aside className="nyt-live-news-sidebar">
      <Link to="/article/1" className="side-article-link">
        <div className="nyt-live-news-item">
          <span className="nyt-main-article-live-label">LIVE</span>
          <p className="nyt-live-news-time">13m ago</p>
          <h3>Scientists have finally worked out how cats produce purring sounds</h3>
          <p>Research reveals how tiny felines make sounds of ‘incredibly low frequencies far below even lowest bass sounds by humans'</p>
        </div>
      </Link>
      <Link to="/article/2" className="side-article-link">
        <div className="nyt-live-news-item">
          <p className="nyt-live-news-time">57m ago</p>
          <h3>Do Cats Rule the World of 'Paw-litics'?"</h3>
          <p>Find out if whiskered officials are clawing their way into power or if catnip policies are just a fur-ocious rumor!</p>
        </div>
      </Link>
      <Link to="/article/3" className="side-article-link">
        <div className="nyt-live-news-item">
          <p className="nyt-live-news-time">1h ago</p>
          <h3>Cats Launch Strategic Nap Initiative to Conquer Human Beds</h3>
          <p>Researchers report felines have implemented a top-secret plan aimed at asserting dominance over household sleeping areas</p>
        </div>
      </Link>
      <Link to="/article/4" className="side-article-link">
        <div className="nyt-live-news-item">
          <p className="nyt-live-news-time">2h ago</p>
          <h3>Local Cat Discovers Time-Traveling Portal in Laundry Basket</h3>
          <p>Owner stunned as cat disappears into the basket, reappearing moments later with a perplexed expression</p>
        </div>
      </Link>
      {/* Add more Side News Articles here */}
    </aside>
  );
}

export default SideNewsSection;
