import React from 'react';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor'

import AppButton from '../AppButton/AppButton.jsx'

import { setActiveProjectScroll, toggleCloseButton } from '../../../actions'

const images = require.context('../../../assets/projects', true);




class ProjectListItem extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            animate: false
        }

        this.animate = this.animate.bind(this)
    }


    animate(isVisible)
    {
        // console.log(isVisible)
        if(isVisible) this.setState({ animate: true })
    }


    render()
    {
        let img_src = images(`./${this.props.projectFolder}/${this.props.mainImage}.jpg`)

        return (
            <div id={this.props.anchor} className={`project-container col-sm-12 col-lg-12 ${(this.state.animate) ? "active" : ""} ${(this.props.projectId === 0) ? "first-project" : ""}`}>
                <div className={`project-container-inner ${(this.props.direction)}`}>
                    <VisibilitySensor onChange={this.animate}><div className="visibility-marker" /></VisibilitySensor>
                    <div className="project-image">
                        {/*<VisibilitySensor onChange={this.animate}>*/}
                            <Link to={`${this.props.path}/${this.props.anchor}`}>
                                <div scrollref={this.props.scrollref} className='project-background' style={{backgroundImage: 'url(' + img_src + ')'}}>
                                    {/*<img src={img_src} />*/}
                                    {/*<video></video>*/}
                                </div>
                            </Link>
                        {/*</VisibilitySensor>*/}
                    </div>
                    <div className='project-info'>
                        {/*<img src={require('../../../assets/images/app/lowpoly.svg')} />*/}
                        <div className='project-title'>
                            <h3>{this.props.client}</h3>
                            <h2>{this.props.title}</h2>
                            <p>{this.props.desc}</p>
                            <AppButton buttonText="View Project" buttonPath={`${this.props.path}/${this.props.anchor}`} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default ProjectListItem