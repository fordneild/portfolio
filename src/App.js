import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects/'

function App() {
  return (
    <div className="content">
      <Navbar />
      <Landing />
      <Projects />
    </div>
  );
}

export default App;
