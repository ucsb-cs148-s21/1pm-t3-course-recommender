import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseComponent from './components/CourseComponent';
import { Result } from './components/Result';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CourseForm } from './components/CourseForm';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Input">Input</Link>
            </li>
            <li>
              <Link to="/Result">Result</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Input">
            <Input />
          </Route>
          <Route path="/Result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
        <CourseComponent />
    </div>
  );
}

function Input() {
  return (
    <div className="App">
        <CourseForm />
    </div>
  );
}



// export default App;