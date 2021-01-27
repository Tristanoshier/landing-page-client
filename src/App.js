import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components/Navigation/Home'
function App() {
  return (
    <Fragment>
      <Router>
        <Home />
      </Router>
    </Fragment>
  );
}

export default App;
