import React from 'react'
import './Projects.scss'

import Project from './Project/'
import data from './ProjectsData'

const Projects = () => {

    return(
        <div className="projects--container">
            <h1>Projects</h1>
            <div className="projects">
                {data.map((projectData,index) => <Project key={index}{...projectData}/>)}
            </div>
        </div>
    )
}


export default Projects