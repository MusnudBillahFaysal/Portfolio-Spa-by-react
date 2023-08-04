// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Portfolio from './components/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/" element={<Home />} />
        <Route path="/" element={<Services />} />
        <Route path="/" element={<Skills />} />

        <Route path="/" element={<Portfolio />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
