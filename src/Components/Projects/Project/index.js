import React from 'react'
import './Project.scss'
import { removeDotSegments } from 'uri-js';

class Project extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
    }
    

    styles={
        backgroundImage: `linear-gradient(to bottom right, ${this.props.color1},${this.props.color2})`,
    }

    handleMouseEnter = () => {
        this.setState({active: true})
    }

    handleMouseLeave = () => {
        this.setState({active: false})
    }

    render(){
        const {state, styles, props} = this;
        const {active} = state;
        return(
            <div 
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={active ? styles : null} 
                className={`project ${active ? "active" : ""}`}>
                <h5>{props.company}</h5>
                <h4>{props.title}</h4>
                <div className="rising">

                </div>
            </div>
        )
    }
    
}

export default Project