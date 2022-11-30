import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, SettingsPage, GamePage, KudosPage } from './pages';
import './index.css';


function App() {


  // API query to get questions from database with language and difficulty level

  const [lang, setLang] = useState("javascript");
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/settings' element={<SettingsPage lang={lang} setLang={setLang} difficulty={difficulty} setDifficulty={setDifficulty} />} />
        <Route path='/game' element={<GamePage lang={lang} setLang={setLang} difficulty={difficulty} setDifficulty={setDifficulty} />} />
        <Route path='/kudos' element={<KudosPage />} />
      </Routes>
    </>
  );
}

export default App;
