import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects/'
import About from  './Components/About'
import { type } from 'os';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      landingVisible: true
    }
  }

  toggleLandingVisible = (boolean) => {
    if(typeof(boolean) === 'boolean'){
      console.log("landingVisible: ", boolean)
      this.setState({
        landingVisible: boolean
      })
    }else{
      const curVal = this.state.landingVisible || false;
      this.setState({
        landingVisible: !curVal
      })
    }
  }

  render(){
    const {state} = this;
    const {landingVisible} = state;
    return (
      <div className="content">
        <Navbar dark={!landingVisible? true: false}/>
        <Landing toggleLandingVisible={this.toggleLandingVisible}/>
        <About />

        <Projects />
      </div>
    );
  }
}

export default App;
