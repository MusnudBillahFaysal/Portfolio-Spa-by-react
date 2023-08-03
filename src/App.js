import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/" element={<Services />} />
        <Route path="/" element={<Skills />} />
        <Route path="/" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
