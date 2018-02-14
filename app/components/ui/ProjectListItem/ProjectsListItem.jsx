import React from 'react';
import {Link} from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor'

import { setActiveProjectScroll } from '../../../actions'



function onChange(isVisible) {

    /*if( isVisible) {
        appStore.dispatch(
            setActiveProjectScroll(this.children.props.scrollref)
        )
    }*/
}

const ProjectListItem = (props) => {

    return (
        <div id={props.anchor} className='project-container col-sm-12 col-lg-12'>
            <div className='project-container-inner'>
                <Link to={`${props.path}/jason`} >
                <VisibilitySensor intervalDelay={100} scrollDelay={75} >
                {/*<VisibilitySensor intervalDelay={100} scrollDelay={75} onChange={onChange} >*/}
                    <div scrollref={props.scrollref} className='project-background'>
                        <div><img src={props.images[0]} /></div>
                        <video></video>
                    </div>
                </VisibilitySensor>
                <div className='project-info'>
                    <div className='project-title'>
                        <h2>{props.title}</h2>
                        <h3>{props.subtitle}</h3>
                        <p>{props.desc}</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
    
}

export default ProjectListItem;
