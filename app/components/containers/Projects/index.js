import React from 'react'
// import ReatDOM from 'react-dom'
// import { viewProject } from '../../../actions'

import Project from '../../ui/Project'
import ProjectsData from '../../../models/projectsData.js'



class Projects extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.state = {
        }

        this.openProject = this.openProject.bind(this)
    }


    componentDidMount()
    {

    }


    openProject()
    {
        /*appStore.dispatch(
            viewProject(true)
        )*/
    }


    loadProjects()
    {
        this.projectsMap = ProjectsData.map(function(data) {

            return (
                <Project onClick={this.openProject} key={data.id} title={data.title} subtitle={data.subtitle} desc={data.desc} images={data.images} />
            )

        }, this)

        return this.projectsMap
    }


    render() {

        return(
            <div className='row' onClick={this.openProject}>
		        {this.loadProjects()}
		    </div>
        )
    }
} 


export default Projects
