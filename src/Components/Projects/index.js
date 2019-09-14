import React from 'react'
import './Projects.scss'

import Project from '../Project'
import data from './ProjectsData'

class Projects extends React.Component{
    constructor(props){
        super(props)
        this.state={
            activeFilter: this.all
        }
    }

    all = "All Projects"

    getCategories(){
        let categories =  [...new Set(data.map((cur) =>{
            return(cur.category)
        }))]
        categories.splice(0,0, this.all)
        categories.sort()
        return categories;
    }

    handleFilterClick = (filter) => {
        this.setState({
            activeFilter: filter
        })
    }
    render(){
        const {state, props} = this;
        const {activeFilter} = state;

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
                    }).map((projectData,index) => <Project key={index}{...projectData}/>)}
                </div>
            </div>
        )
    }
    
}


export default Projects