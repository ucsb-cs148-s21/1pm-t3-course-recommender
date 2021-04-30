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

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={CourseForm} />
        <Route path='/Survey' component={CourseForm} />
        <Route path='/Input' component={CourseComponent} />
        <Route path='/Result' component={Result} />
      </Switch>
    </Router>
  );
}
export default App;
