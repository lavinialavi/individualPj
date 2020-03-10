import React from 'react';
import Footer from './components/Footer';
import MainNav from './components/MainNav';


import {
  BrowserRouter as Router,
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
