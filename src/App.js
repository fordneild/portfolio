import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects/'
import Landing from './Components/Landing'

function App() {
  return (
    <div className="content">
      <Landing />
      <Projects />
    </div>
  );
}

export default App;
