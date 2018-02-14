import React from 'react'
import { Link } from 'react-router-dom'
import uuid from 'uuid'

// import { viewProject } from '../../../actions'

import ProjectListItem from '../ProjectListItem/ProjectsListItem.jsx'
import ProjectScrollIndicator from '../ProjectScrollIndicator/ProjectScrollIndicator.jsx'
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


    componentWillMount() 
    {

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
                <ProjectListItem key={uuid.v4()} scrollref={data.index} anchor={data.anchor} path={this.props.match.path} title={data.title} subtitle={data.subtitle} desc={data.desc} images={data.images}/>
            )

        }, this)

        return this.projectsMap
    }


    render() {
        return (
            <div className='' onClick={this.openProject}>
                {this.loadProjects()}
            </div>
        )
    }
} 


export default ProjectsList
