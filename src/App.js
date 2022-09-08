import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navigation/Navbar';
import Landing from './components/Pages/Landing';
import FocusedBlog from './components/Pages/Blog/FocusedBlog';
import FocusedProject from './components/Pages/Projects/FocusedProject';
import Services from './components/Pages/Services/Services';
import Blog from './components/Pages/Blog/Blog';
import Footer from './components/Pages/Footer';
import Projects from './components/Pages/Projects/Projects';
import Contact from './components/Pages/Contact/Contact';
import AllPosts from './components/Pages/Blog/AllPosts';
import AllProjects from './components/Pages/Projects/AllProjects';
import ContactForm from  './components/Pages/Contact/ContactForm';
import FocusNavbar from './components/Navigation/FocusNavbar';

import './css/app.scss';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const getIntitialMode = useCallback(() =>  {
    const isReturningUser = 'dark' in localStorage;
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
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  const colorMode = (darkClass, lightClass) => {
    return darkMode ? darkClass : lightClass;
  }

  return (
    <div className='app'>
        <Switch>
          <Route exact path="/">
            <Navbar darkMode={darkMode} colorMode={colorMode} />
            <Landing darkMode={darkMode} setDarkMode={setDarkMode} colorMode={colorMode} />
            <Projects colorMode={colorMode} />
            <Services />
            <Blog colorMode={colorMode} />
            <Contact colorMode={colorMode} />
            <Footer />
          </Route>
          <Route exact path="/post-details/:post">
            <FocusNavbar />
            <FocusedBlog darkMode={darkMode} colorMode={colorMode} />
            <Footer />
          </Route>  
          <Route exact path="/project-details/:project">
            <FocusNavbar />
            <FocusedProject darkMode={darkMode} colorMode={colorMode} />
            <Footer />
          </Route>
          <Route exact path="/all-posts">
            <FocusNavbar />
            <AllPosts />
            <Footer />
          </Route>
          <Route exact path="/all-projects">
            <FocusNavbar />
            <AllProjects />
            <Footer />
          </Route>
          <Route exact path="/contact-form">
            <FocusNavbar />
            <ContactForm />
            <Footer />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
