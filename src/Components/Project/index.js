import React from 'react'
import './Project.scss'

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

    // handleMouseEnter = () => {
    //     this.setState({active: true})
    // }

    // handleMouseLeave = () => {
    //     this.setState({active: false})
    // }

    render(){
        const {state, styles, props} = this;
        const {image, title, role, year, company ,technologies, dark, gradient, imageTop, imageLeft, imageMask} = props;
        console.log("Project props",props)
        //const {active} = state;
        return(
            <div className={`project ${dark? "dark" : ""}`}
                // onMouseEnter={this.handleMouseEnter}
                // onMouseLeave={this.handleMouseLeave}
                style={{backgroundImage: `url(${image})`,backgroundPositionY: imageTop , backgroundPositionX: imageLeft}}
                > 
                <div className="gradient"
                style={{backgroundImage: gradient}}
                >
                </div>
                <div className="rising-content">
                    <h2>{title}</h2>
                    <h4>{company}</h4>

                </div>
            </div>
        )
    }
    
}

export default Project