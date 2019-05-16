import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Users from './components/Users.js'
import User from './components/User.js'
import Movie from './components/Movie.js'
import About from './components/About.js'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Link to='/' style={{ textDecoration: 'none', color:'black', paddingRight:'5px' }}>Home</Link> | 
            <Link to='/about' style={{ textDecoration: 'none', color:'black', paddingLeft:'10px'}}>About</Link>
          </header>
          <Switch>
            <Route exact path='/' component={Users} />
            <Route path='/about' component={About} />
            <Route path='/:id' component={User} />
            <Route path='/:id/movie/:movieId' component={Movie} />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
