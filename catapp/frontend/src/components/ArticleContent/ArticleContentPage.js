import React, { useState, useEffect } from 'react';
import './ArticleContentPage.css';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


function ArticleContentPage() {
  const [hasSubscription, setHasSubscription] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      try {
        const decodedToken = jwtDecode(authToken);
        setHasSubscription(decodedToken.hasSubscription || false);
      } catch (error) {
        console.error('Error decoding token:', error);
        setHasSubscription(false); // Set default subscription status if decoding fails
      }
    }
  }, []);
  

  return (
    <div className="article-content-container">
      <img src="../4.jpg" className="article-image" />
      {!hasSubscription ? (
        <div className="article-content">
          <div className="content-overlay">
            <div className="login-prompt">
              <p>Subscribe now to view the full article.</p>
              <Link to="/login">
                <button className="login-button">Subscribe</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="image-text-container">
          
          <div className="image-text-item">
          <p>Nami. Photographed by Yuri</p>
            <img src="../1.jpg" alt="Nami1" className="nyt-main-article-image" />
            <p>Nami on a bad day</p>
          </div>
          <div className="image-text-item">
            <img src="../2.jpg" alt="Nami2" className="nyt-main-article-image" />
            <p>Nami on a good day</p>
          </div>
          <div className="image-text-item">
            <img src="../3.jpg" alt="Nami3" className="nyt-main-article-image" />
            <p>Nami everyday</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleContentPage;