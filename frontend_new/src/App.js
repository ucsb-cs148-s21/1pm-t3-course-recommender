import React from 'react';
import './App.css';
import NavBar from './components/nav-bar';
import CourseComponent from './components/CourseComponent';
import { Result } from './components/Result';
import { CourseForm } from './components/CourseForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/Survey' component={CourseForm} />
        <Route path='/CourseList' component={CourseComponent} />
        <Route path='/Result' component={Result} />
      </Switch>
    </Router>
  );
}
export default App;
