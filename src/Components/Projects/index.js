import React from 'react'
import './Projects.scss'
import Project from '../Project'
import LearnMore from '../LeanMore/'
import data from './ProjectsData'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class Projects extends React.Component{
    constructor(props){
        super(props)
        this.state={
            activeFilter: this.all,
            learnMoreData: null
        }

    }
    modalRef = React.createRef();
    targetModalElement = null;
    all = "All Projects"

    componentWillUnmount(){
        clearAllBodyScrollLocks();
    }

    getCategories(){
        let categories =  [...new Set(data.map((cur) =>{
            return(cur.category)
        }))]
        categories.splice(0,0, this.all)
        categories.sort()
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
            <div className="projects--container">
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
                        if(activeFilter === this.all){
                            return true
                        }else{
                            return projectData.category === activeFilter;
                        }
                    }).map((projectData,index) => <Project openModal={this.openModal} key={index} data={projectData}/>)}
                </div>
                {learnMoreData != null ? <LearnMore closeModal={this.closeModal} data={learnMoreData}/> : null}
            </div>
        )
    }
    
}


export default Projects