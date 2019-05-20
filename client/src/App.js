import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Users from './components/Users.js'
import User from './components/User.js'
import Movies from './components/Movies.js'
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
            <Link to ='/movie' style={{ textDecoration: 'none', color:'#336B87', paddingLeft:'10px', fontWeight:'bold', fontSize:'20px'}}>Movies</Link> |
            <Link to='/about' style={{ textDecoration: 'none', color:'#336B87', paddingLeft:'10px', fontWeight:'bold', fontSize:'20px'}}>About</Link> 
            <h1 className='heading'>Movie-Storm</h1>
            

          </header>
          <Switch>
            <Route exact path='/' component={Users} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:id' component={User} />
            <Route exact path='/movie' component={Movies} />
            <Route exact path='/movie/:movieId' component={Movie} />
          </Switch>
        </div>
      </Router>
    )
  }
}



export default App;
