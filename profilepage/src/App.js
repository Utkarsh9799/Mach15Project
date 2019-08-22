import React from 'react';
import About from './components/About';
import Band from './components/Band';
import Available from './components/Available';
import Navigationbar from './components/Navigationbar';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const borderStyle = {
  margin: '1%',
  border: '1px solid #eee'
}

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Router>
      <Navigationbar />
      <div className="border" style={borderStyle}>
        <About />
        <Band />
        <Available />
      </div>
      </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
