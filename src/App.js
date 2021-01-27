import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components/Navigation/Home';
import './css/main.css'
function App() {
  return (
    <div class="app">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
