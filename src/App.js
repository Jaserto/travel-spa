import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
