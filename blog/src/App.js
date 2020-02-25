import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Blogpost1 from './components/Blogpost1';

function App() {
  return (
    <div className="App">
     
       <Blogpost1 title="test" date="25 feb" author="Andrei Laur"> <p> welcome blogpost </p></Blogpost1>
        
     


    {/* <Layout name="test">
    </Layout> */}
      </div>
  );
}

export default App;
