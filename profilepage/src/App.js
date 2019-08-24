import React from 'react';
import About from './components/About';
import Band from './components/Band';
import Available from './components/Available';
import Connect from './components/Connect';
import Videos from './components/Videos';
import Gigs from './components/Gigs';
import Comments from './components/Comments';
import FamousBands from './components/FamousBands';
import Collections from './components/Collections';

const borderStyle = {
  margin: '1%',
  border: '1px solid #eee'
}

function App() {
  return (
    <div className="App">
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
      </div>
    </div>
  );
}

export default App;
