import React from 'react';
// import Project from './components/Project';
// import About from './components/About';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Blog from './components/Blog';
// import Header from './components/Header';
import Footer from './components/Footer';
import MainNav from './components/TemporaryDrawer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App(props) {

 
  return (

    <Router>
      <div className="flex flex-col min-h-screen">
        <MainNav />
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
