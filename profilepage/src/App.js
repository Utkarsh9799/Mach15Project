import React from 'react';
import About from './components/About';
import Band from './components/Band';
import Available from './components/Available';
import Navigationbar from './components/Navigationbar';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Connect from './components/Connect';
import Slider from './components/Slider';
import slider from './components/Slider';
import Info from './components/Info';
import Like from './components/Like';

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
        <Slider />
        <Info />
        <Like />
        <About />
        <Band />
        <Available />
        <Connect />
      </div>
      </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
