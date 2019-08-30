import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import PP1 from './components/profilepage/PP1/PP1';

function App() {
  return (
    <div className="App">
      <Router>
        <PP1 />
      </Router>
    </div>
  );
}

export default App;
