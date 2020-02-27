import React from 'react';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Blog from './components/Blog';
import Header from './components/Header';
import Footer from './components/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(props) {
  return (

    <Router>
      <div className="flex flex-col min-h-screen">
        <Header></Header>

        <div className="flex-grow">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Router path="/about">
              <About title="Lavinia" />
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
        </div>

        <Footer></Footer>
      </div>

    </Router>
  );
}
export default App;
