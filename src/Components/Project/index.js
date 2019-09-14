import React from 'react'
import './Project.scss'
import LearnMore from '../LeanMore/'


class Project extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mobileTouch: null
        }

    }

    toggleMobileTouch = (boolean) => {
        this.setState({
            mobileTouch: boolean
        })
    }
    

    render(){
        const {state, styles, props} = this;
        const {learnMore, mobileTouch} = state;
        const {data, openModal} = props
        const {image, title, role, year, company ,technologies, dark, gradient, imageTop, imageLeft, description} = data;
        //const {active} = state;
        return(
            <div 
                className={`project ${dark? "dark" : ""} ${mobileTouch? "hover-effects" : ""}`}
                // onMouseEnter={this.handleMouseEnter}
                // onMouseLeave={this.handleMouseLeave}
                onTouchStart = {() => this.toggleMobileTouch(true)}
                onTouchEnd = {() => this.toggleMobileTouch(false)}
                style={{backgroundImage: `url(${image})`,backgroundPositionY: imageTop , backgroundPositionX: imageLeft}}
                > 
                <div className="gradient"
                style={{backgroundImage: gradient}}
                >
                </div>
                <div className="rising-content">
                    <h2 className = "title">{title}</h2>
                    <h4 className="company">{company}</h4>
                    <h3 onClick={() => openModal(data)} className={`learn-more-button ${dark? "dark" : ""}`}>Learn More</h3>
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
                {/* <LearnMore visible={learnMore} toggleModal={this.toggleModal}{...props}/> */}
            </div>            
        )
    }
    
}

export default Project