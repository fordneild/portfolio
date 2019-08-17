import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import './Landing.scss'
import LandingImage from './landingImage2.png'

class Landing extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isVisible: false,
            reflectionStyles: {
                filter: "blur(2px)",
                transform: "rotate(180deg) scale(-1,1.5) translateY(0px)",
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
        const blur = this.INITIAL_BLUR+(deltaReflectionY/this.BLUR_CONSTANT)
        let translateY = `${deltaReflectionY*this.REFLECTION_CONSTANT}`
        //annoying mobile thing that lets u scroll higher than the page is the reason for this
        
        if(translateY < 0){
            translateY = 0;
        }
        const reflectionStyles = {
            filter: `blur(${blur}px)`,
            transform: `rotate(180deg) scale(-1,1.5) translateY(${-1*translateY}px)`
        }
        this.setState({
            reflectionStyles: reflectionStyles,
            translateY: translateY
        })
    }
        
    
    
    onChange = (isVisible) => {
        if(isVisible){
            window.addEventListener('scroll',this.updateReflection)
        }else{
            window.removeEventListener('scroll',this.updateReflection)
        }
        this.setState({
            isVisible: isVisible
        })
    }


    
    render(){
        const {isVisible} = this.state;
        return(
            <VisibilitySensor partialVisibility={true} onChange={this.onChange}>
                <section className="landing">
                <img className={isVisible? "fixed": null} src={LandingImage}/>
                    <div className={`landing__intro ${!isVisible? "gone": ""}`}>
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