// src/NewsApp.js

import React, { useEffect, useState } from 'react';
import './NewsApp.css'; // Make sure to adjust the import if your CSS file has a different name
import { Link, useHistory } from 'react-router-dom'; 
const API_KEY = "814bfdbda0f64d7695bb3ebd9eb90a82";
const url = "https://newsapi.org/v2/everything?q=";

function NewsApp() {
  const [articles, setArticles] = useState([]);
  const [curSelectedNav, setCurSelectedNav] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

    console.log('pringing')


  useEffect(() => {
    fetchNews('India');
  }, []);

  const reload = () => {
    window.location.reload();
  };

  const fetchNews = async (query) => {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    setArticles(data.articles);
  };

  const onNavItemClick = (id) => {
    fetchNews(id);
    setCurSelectedNav(id);
  };

  const onSearchButtonClick = () => {
    if (searchQuery) {
      fetchNews(searchQuery);
      setCurSelectedNav(null);
    }
  };

  return (
    <div>
      <nav>
        <div className="main-nav container flex">
          <a href="#" onClick={reload} className="company-logo">
            <img src="logo.png" alt="company logo" />
          </a>
          <div className="nav-links">
            <ul className="flex">
              <li
                className={`hover-link nav-item ${curSelectedNav === 'ipl' ? 'active' : ''}`}
                id="ipl"
                onClick={() => onNavItemClick('ipl')}
              >
                IPL
              </li>
              <li
                className={`hover-link nav-item ${curSelectedNav === 'finance' ? 'active' : ''}`}
                id="finance"
                onClick={() => onNavItemClick('finance')}
              >
                Finance
              </li>
              <li
                className={`hover-link nav-item ${curSelectedNav === 'politics' ? 'active' : ''}`}
                id="politics"
                onClick={() => onNavItemClick('politics')}
              >
                Politics
              </li>
            </ul>
          </div>
          <div className="search-bar flex">
            <input
              id="search-text"
              type="text"
              className="news-input"
              placeholder="e.g. Science"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button id="search-button" className="search-button" onClick={onSearchButtonClick}>
              Search
            </button>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <Link to="/login" className="company-logo">
            <button className="search-button">
              Login
        </button>
          </Link>
          <Link to="/signup" className="company-logo">
        <button className="search-button">
            Signup
        </button>
            </Link>
          </div>
        </div>            
        
      </nav>

      <main>
        <div className="cards-container container flex" id="cards-container">
          {articles.map((article, index) => (
            <div key={index} className="card" onClick={() => window.open(article.url, '_blank')}>
              <div className="card-header">
                <img src={article.urlToImage || 'https://via.placeholder.com/400x200'} alt="news-image" />
              </div>
              <div className="card-content">
                <h3 id="news-title">{article.title}</h3>
                <h6 className="news-source">{`${article.source.name} · ${new Date(article.publishedAt).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}`}</h6>
                <p className="news-desc">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default NewsApp;
