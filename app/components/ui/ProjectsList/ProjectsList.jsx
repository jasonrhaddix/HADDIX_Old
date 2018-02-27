import React from 'react'
import { Link } from 'react-router-dom'
import uuid from 'uuid'

import { toggleCloseButton } from '../../../actions'

import ProjectListItem from '../ProjectListItem/ProjectsListItem.jsx'
import ProjectScrollIndicator from '../ProjectScrollIndicator/ProjectScrollIndicator.jsx'



class ProjectsList extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            /* */
        }
    }


    componentWillMount() 
    {

    }


    componentDidMount()
    {

    }


    loadProjects()
    {
        this.projectsMap = this.props.projects.map(function( data, i ) {

            const direction = (i % 2 == 0) ? "right" : "left"
            
            return (
                <ProjectListItem 
                    key={uuid.v4()}
                    scrollref={data.index}
                    anchor={data.anchor}
                    path={this.props.match.path}
                    title={data.title}
                    subtitle={data.subtitle}
                    desc={data.desc}
                    projectFolder={data.anchor}
                    images={data.images} 
                    direction={direction}
                    onClickEvent={this.openProject}
                />
            )

        }, this)

        return this.projectsMap
    }


    render() {
        return (
            <div className='projectlist-container'>
                {this.loadProjects()}
            </div>
        )
    }
} 


export default ProjectsList
