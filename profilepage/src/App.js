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
import Videos from './components/Videos';
import Gigs from './components/Gigs';
import Comments from './components/Comments';
import FamousBands from './components/FamousBands';
import Collections from './components/Collections';
import Footer from './components/Footers';
import Merchendise from './components/Merchendise';

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
      <Info />
      <div className="border" style={borderStyle}>
        <About />
        <Band />
        <Available />
        <Connect />
        <Videos />
        <FamousBands />
        <Gigs />
        <Comments />
        <Collections />
        <Merchendise />
        <Footer />
      </div>
      </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
