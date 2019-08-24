import React from 'react';
import About from './components/About';
import Band from './components/Band';
import Available from './components/Available';
import Connect from './components/Connect';
import Videos from './components/Videos';

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
      </div>
    </div>
  );
}

export default App;
