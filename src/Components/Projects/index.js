import React from 'react'
import './Projects.scss'

import Project from '../Project/'

const Projects = () => {
    const sampleProject = {
        title: "Sample project",
        year: "2019",
        role: "Front-End Developer",
        company: "Way2B1",
        technologies: ["React","Firebase","HTML","Sass",],
        dark: false,
        color1: "red",
        color2: "white"
    }
    
    let data = [];
    const length = 4;
    for(let i = 0; i < length; i++){
        data.push(sampleProject);
    }

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