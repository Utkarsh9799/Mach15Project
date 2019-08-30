import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Main from './components/profilepage/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
