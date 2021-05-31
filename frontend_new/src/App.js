import React from 'react';
import './App.css';
import NavBar from './components/nav-bar';
import CourseComponent from './components/CourseComponent';
import { Result } from './components/Result';
import { CourseForm } from './components/CourseForm';
import  Profile from './components/Profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import PrivateRoute from './components/nav-bar/PrivateRoute'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/Survey' component={CourseForm} />
        <Route path='/Input' component={CourseComponent} />
        <Route path='/Result' component={Result} />
        <PrivateRoute path="/Profile" component={Profile} />
        {/* <Route path='/Home' component={LandingPage} /> */}
      </Switch>
    </Router>
  );
}
export default App;
