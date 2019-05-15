import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Users from './components/Users.js'
import User from './components/User.js'
import Movie from './components/Movie.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Users} />
            <Route path='/:id' component={User} />
            <Route path='/:id/movie/:movieId' component={Movie} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
