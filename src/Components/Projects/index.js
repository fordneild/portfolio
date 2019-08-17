import React from 'react'
import './Projects.scss'

import Project from '../Project'
import data from './ProjectsData'

class Projects extends React.Component{
    constructor(props){
        super(props)
        this.state={
            activeFilter: "All"
        }
    }

    getCategories(){
        let categories =  [...new Set(data.map((cur) =>{
            return(cur.category)
        }))]
        categories.splice(0,0, "All")
        return categories;
    }

    handleFilterClick = (filter) => {
        this.setState({
            activeFilter: filter
        })
    }
    render(){
        const {state} = this;
        const {activeFilter} = state;

        return(
            <div className="projects--container">
                <h1>Projects</h1>
                <ul className="menu">
                    {this.getCategories().map((filter, index) => {
                        return(
                            <li 
                            className={activeFilter===filter? "active" : null} 
                            key={index}
                            onClick={() => this.handleFilterClick(filter)}>{filter}</li>
                        )
                    })}
                </ul>
                <div className="projects">
                    {data.filter((projectData) => {
                        if(activeFilter === "All"){
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