import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Blogpos1 from './components/Blogpost1';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Blog from './components/Blog';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Router path="/about">
          <About />
        </Router>
        <Router path="/project">
          <Project />
        </Router>
        <Router path="/blog">
          <Blog />
        </Router>
        <Route path="/contact">
          <Contact />
        </Route>

      </Switch>

    </Router>
  );
}
export default App;
