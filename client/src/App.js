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
        <div className='App'>
          <header>
            <Link to='/' style={{ textDecoration: 'none', color:'#336B87', paddingRight:'5px', fontWeight:'bold', fontSize:'20px'}}>Home</Link> | 
            <Link to='/about' style={{ textDecoration: 'none', color:'#336B87', paddingLeft:'10px', fontWeight:'bold', fontSize:'20px'}}>About</Link>
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
