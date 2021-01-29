import React, { useState, useEffect, useCallback } from 'react';

import Home from './components/Navigation/Home';
import './css/app.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const getIntitialMode = useCallback(() =>  {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }, [])
    
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(getIntitialMode()))
  },[darkMode, getIntitialMode])


  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className={darkMode ? "app-darkmode" : "app-lightmode"}>
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
