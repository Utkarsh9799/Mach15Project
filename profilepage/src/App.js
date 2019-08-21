import React from 'react';
import About from './components/About';
import Band from './components/Band';

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
      </div>
    </div>
  );
}

export default App;
