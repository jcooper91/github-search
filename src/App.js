import React from 'react';
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Alert from './components/layout/Alert'
import User from './components/users/User'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <AlertState>
      <GithubState>
        <Router>
          <div className="App">
          <Navbar />
            <div className="container">
            <Alert />
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route exactly path={'/user/:login'} component={User} />
            </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    </AlertState>
  )
}

export default App
