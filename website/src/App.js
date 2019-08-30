import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './components/homepage/Home';
import PP1 from './components/profilepage/PP1/PP1';

class App extends Component {
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
        </div>
      </Router>
    );
  }
}

export default App;
