import React from 'react'

// import { viewProject } from '../../../actions'

import ProjectListItem from '../../ui/ProjectListItem/ProjectsListItem.jsx'
import ProjectsData from '../../../models/projectsData.js'



class ProjectsList extends React.Component
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
        this.projectsMap = ProjectsData.map(function(data, i) {

            return (
                <ProjectListItem path={this.props.match.path} key={data.id} title={data.title} subtitle={data.subtitle} desc={data.desc} images={data.images} />
            )

        }, this)

        return this.projectsMap
    }


    render() {
        console.log( this.props )
        return (
            <div className='' onClick={this.openProject}>
		        {this.loadProjects()}
		    </div>
        )
    }
} 


export default ProjectsList
