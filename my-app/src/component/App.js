import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}

export default App;  