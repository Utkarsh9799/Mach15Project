import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './components/homepage/Home';
import PP1 from './components/profilepage/PP1/PP1';
import FP1 from './components/filterpage/FP1/FP1';

class App extends Component {
  componentDidMount() {
    // Jquery here $(...)...
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )} />
          <Route path="/pp1" component={PP1} />
          <Route path="/fp1" component={FP1} />
        </div>
      </Router>
    );
  }
}

export default App;
