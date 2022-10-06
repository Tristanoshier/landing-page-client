import React from 'react';
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
import { PortfolioService } from './components/Pages/Services/PortfolioService';
import { StoreService } from './components/Pages/Services/StoreService';
import { ConsultationService } from './components/Pages/Services/ConsultationService';

import './css/app.scss';

function App() {
  return (
    <div className='app'>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Landing />
            <Services />
            <Projects />
            <Contact />
            <Footer />
          </Route>
          <Route exact path="/post-details/:post">
            <FocusNavbar />
            <FocusedBlog />
            <Footer />
          </Route>  
          <Route exact path="/project-details/:project">
            <FocusNavbar />
            <FocusedProject />
            <Footer />
          </Route>
          <Route exact path="/portfolio-service">
            <FocusNavbar />
            <PortfolioService />
            <Footer />
          </Route>
          <Route exact path="/store-service">
            <FocusNavbar />
            <StoreService />
            <Footer />
          </Route>
          <Route exact path="/consultation-service">
            <FocusNavbar />
            <ConsultationService />
            <Footer />
          </Route>
          <Route exact path="/Blog">
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
