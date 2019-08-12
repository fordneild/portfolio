import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import './Landing.scss'
import LandingImage from './landingImage.png'

class Landing extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isVisible: false,
            initialReflectionY: null,
            reflectionStyles: {
                filter: "blur(2px)",
                top: 0
            }
        }
        this.reflectionRef = React.createRef()
    }

    INITIAL_BLUR = 2
    //higher = slower blur
    BLUR_CONSTANT = 42.5
    //not sure what hgiher means but ill find out
    REFLECTION_CONSTANT = 1.4
    componentDidMount(){
        this.updateReflection()
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.updateReflection)
    }

    updateReflection = () => {
        const deltaReflectionY = window.pageYOffset;
        console.log("deltaReflectionY",deltaReflectionY)
        const blur = this.INITIAL_BLUR+(deltaReflectionY/this.BLUR_CONSTANT)
        const top = `${deltaReflectionY*this.REFLECTION_CONSTANT}`
        const reflectionStyles = {
            filter: `blur(${blur}px)`,
            top: `${top}px`
        }
        this.setState({
            reflectionStyles: reflectionStyles
        },console.log(this.state.reflectionStyles))
    }
        
    
    
    onChange = (isVisible) => {
        if(isVisible){
            window.addEventListener('scroll',this.updateReflection)
        }else{
            window.removeEventListener('scroll',this.updateReflection)
        }
        this.setState({
            isVisibe: isVisible
        },console.log("isVisible",isVisible))
    }


    
    render(){
        return(
            <VisibilitySensor partialVisibility={true} onChange={this.onChange}>
                <section className="landing">
                <img src={LandingImage} />
                    <div className="landing__intro">
                        <div className="text">
                            <h4>Meet Me</h4>
                            <h1>Ford Neild</h1>
                            <h4>Full Stack Developer</h4>
                        </div>
                        <div ref={this.reflectionRef} 
                        className="text-relflection"
                        style={this.state.reflectionStyles}>
                            <h4>Meet Me</h4>
                            <h1>Ford Neild</h1>
                            <h4>Full Stack Developer</h4>
                        </div>
                    </div>
                </section>
            </VisibilitySensor>
        )
    }
    
}


export default Landing