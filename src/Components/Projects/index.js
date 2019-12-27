import React from 'react'
import './Projects.scss'
import Project from '../Project'
import LearnMore from '../LeanMore/'
import data from './ProjectsData'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import VisibilitySensor from "react-visibility-sensor";

class Projects extends React.Component{
    constructor(props){
        super(props)
        this.state={
            activeFilter: this.all,
            learnMoreData: null,
            isVisible: false,
            backgroundStyles: this.DEFAULT_BACKGROUND_STYLES
        }
        this.containerRef = React.createRef();

    }
    modalRef = React.createRef();
    targetModalElement = null;
    DISABLE_BG_ANIMATION = false;
    DEFAULT_BACKGROUND_STYLES = {
        backgroundPosition: "50% 50%",
        backgroundSize: "100%"
    }
    MAX_WINDOW_WIDTH_FOR_ANIMATION = 1600;
    MIN_WINDOW_WIDTH_FOR_ANIMATION = 600;

    checkWindowSize(){
        //returns true if within max and min
        return !(window.innerWidth < this.MIN_WINDOW_WIDTH_FOR_ANIMATION || window.innerWidth > this.MAX_WINDOW_WIDTH_FOR_ANIMATION)
    }

    all = "All Projects"

    // -------------------------------
  componentDidMount() {
    this.updateBackground();
    //this.onChange(this.state.isVisible)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateBackground);
  }

  calculateProperty(min, max, percentScrolled, increase){
    let percent = percentScrolled;
    if(!increase){
        percent = percent * -1;
    }
    let propertyValue = min + ((max-min) * percent) 
    // if(propertyValue > max){
    //     propertyValue = max
    // }
    // if(propertyValue < min){
    //     propertyValue = min;
    // }
    return propertyValue;
  }

  updateBackground = () => {
    const validWindowSize = this.checkWindowSize();
    if(this.containerRef.current && validWindowSize){
        const {top, left} = this.containerRef.current.getBoundingClientRect();
        const minBackgroundSize = 100;
        const maxBackgroundSize = 120;
        const deltaY = -1*top;
        const containerSize = this.containerRef.current.getBoundingClientRect().height;
        const percentScrolled = deltaY/containerSize;
        let backgroundSize = this.calculateProperty(minBackgroundSize, maxBackgroundSize, percentScrolled, true)
        let backgroundLeft = this.calculateProperty(50, 100, percentScrolled, true)

        const backgroundStyles = {
            backgroundPosition: `${backgroundLeft}% 50%`,
            // backgroundSize: `${backgroundSize}%`
        }
        this.setState({
          backgroundStyles: backgroundStyles
        });
    // }else if(!validWindowSize){
    //     this.setState({
    //       backgroundStyles: this.DEFAULT_BACKGROUND_STYLES
    //     });
        }
  };

  onChange = isVisible => {
    const validWindowSize = this.checkWindowSize();
    if (isVisible && !this.DISABLE_BG_ANIMATION && validWindowSize) {
      window.addEventListener("scroll", this.updateBackground);
    } else {
      window.removeEventListener("scroll", this.updateBackground);
    }
    this.setState({
      isVisible: isVisible
    });
  };
    // -------------------------------


    componentWillUnmount(){
        clearAllBodyScrollLocks();
        window.removeEventListener("scroll", this.updateBackground);
    }

    getCategories(){
        let categories =  [...new Set(data.map((cur) =>{
            return(cur.category)
        }))]
        categories.sort()
        categories.splice(0,0, this.all)
        return categories;
    }

    openModal = (learnMoreData) => {
        this.setState({learnMoreData: learnMoreData})
        disableBodyScroll(this.targetModalElement);
    }
    
    closeModal = () => {
        this.setState({learnMoreData: null})
        enableBodyScroll(this.targetModalElement);
    }

    handleFilterClick = (filter) => {
        this.setState({
            activeFilter: filter
        })
    }
    render(){
        const {state, props} = this;
        const {activeFilter, learnMoreData} = state;

        return(
            <VisibilitySensor partialVisibility={true} onChange={this.onChange} offset={{top:50}}>
                <div className="projects--container" style={this.state.backgroundStyles} ref={this.containerRef} >
                    {/* <img className="projects--background" src={'https://images.unsplash.com/photo-1539717037182-c782ec2b4f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1647&q=80'}/> */}
                    <a id="projects" />
                    <h1>Projects</h1>
                    <ul className="menu">
                        {this.getCategories().map((filter, index) => {
                            return(
                                <li 
                                className={`${activeFilter===filter? "active" : ""} ${filter===this.all? "all" : ""}`}
                                key={index}
                                onClick={() => this.handleFilterClick(filter)}>{filter}</li>
                            )
                        })}
                    </ul>
                    <div className="projects">
                        {data.filter((projectData) => {
                            if(projectData.show === 1){
                                if(activeFilter === this.all){
                                    return true
                                }else{
                                    return (projectData.category === activeFilter);
                                }
                            }else{
                                return false
                            }
                        }).map((projectData,index) => <Project openModal={this.openModal} key={index} data={projectData}/>)}
                    </div>
                    {learnMoreData != null ? <LearnMore closeModal={this.closeModal} data={learnMoreData}/> : null}
                </div>
            </VisibilitySensor>
        )
    }
    
}


export default Projects