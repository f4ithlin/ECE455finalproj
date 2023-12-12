import React from 'react';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import ArticleContent from './components/ArticleContent/ArticleContentPage';

import NoPage from './pages/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Navigate } from 'react-router-dom';

import './App.css';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          
          <Route path="*" element={<NoPage />} />
          <Route path="/mainArticle" element={<ArticleContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;