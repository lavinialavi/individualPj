import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Blogpost1 from './components/Blogpost1';

import Contact from './components/Contact';
import Home from './components/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Router path="/about">
         <About/>
        </Router>
        <Router path="/">
          <Project/>
        </Router>

        <Route path="/contact">
          <Contact />
        </Route>

      </Switch>

    </Router>
  );
}





export default App;
