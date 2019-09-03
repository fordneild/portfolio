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
                    <h2 className = "title">{title}</h2>
                    <h4 className="company">{company}</h4>
                    <h3 className={`learn-more ${dark? "dark" : ""}`}>Learn More</h3>
                    <div className="about">
                        <p>Year: <span>{year}</span></p>
                        {role && <p>Role: <span>{role}</span></p>}
                    </div>
                    <ul className={`technologies ${dark? "dark" : ""}`}>
                        {technologies.map((technology, index)=> {
                            return(
                                <li key={index}>{technology}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
    
}

export default Project