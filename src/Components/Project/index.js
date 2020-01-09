import React from 'react'
import './Project.scss'
import LearnMore from '../LeanMore/'


class Project extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mobileTouch: null,
            // backgroundImage: this.props.data.image,
            // backgroundImageNum: 0
        }
    }

    toggleMobileTouch = (boolean) => {
        this.setState({
            mobileTouch: boolean
        })
    }

    selectRandomBackgroundImage = () => {
        if(this.props.data.secondaryImages){
            const options = this.props.data.secondaryImages
            options.push(this.props.data.image)
            const imageNum = (this.state.backgroundImageNum+1) % options.length
            console.log(options)
            console.log(imageNum)
            console.log(options[imageNum])
            this.setState({
                backgroundImage: options[imageNum],
                backgroundImageNum: imageNum
            })
        }
    }
    

    render(){
        const {state, styles, props} = this;
        const {backgroundImage, learnMore, mobileTouch} = state;
        const {data, openModal} = props
        const {image, title, role, year, company ,technologies, dark, gradient, imageTop, imageLeft, description, addMask} = data;
        return(
            <div 
                className={`project ${dark? "dark" : ""} ${mobileTouch? "hover-effects" : ""}`}
                onTouchStart = {() => this.toggleMobileTouch(true)}
                onTouchEnd = {() => this.toggleMobileTouch(false)}
                //onMouseLeave = {() => this.selectRandomBackgroundImage()}
                style={{backgroundImage: 
                        `${(!dark && addMask)? "linear-gradient(0deg, rgba(0,0,0,0.4) 30%, rgba(255,255,255,0) 60%),": ""}
                        url(${image})`,
                        backgroundPositionY: imageTop,
                        backgroundPositionX: imageLeft
                    }}
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