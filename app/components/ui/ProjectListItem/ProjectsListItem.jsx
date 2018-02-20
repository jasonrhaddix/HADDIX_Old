import React from 'react';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor'

import AppButton from '../AppButton/AppButton.jsx'

import { setActiveProjectScroll } from '../../../actions'

const images = require.context('../../../assets/images/projects', true);



/*function onChange(isVisible) {

    if( isVisible) {
        appStore.dispatch(
            setActiveProjectScroll(this.children.props.scrollref)
        )
    }
}*/



const ProjectListItem = (props) => {
    
    let img_src = images(`./${props.projectFolder}/${props.images[0]}.jpg`)

    return (

        <div id={props.anchor} className='project-container col-sm-12 col-lg-12'>
            <div className={`project-container-inner ${(props.direction)}`}>
                <VisibilitySensor>
                <Link to={`${props.path}/${props.anchor}`} >
                {/*<VisibilitySensor intervalDelay={100} scrollDelay={75} onChange={onChange} >*/}
                    <div scrollref={props.scrollref} className='project-background'>
                        <div><img src={img_src} /></div>
                        <video></video>
                    </div>
                </Link>
                </VisibilitySensor>
                <div className='project-info'>
                    <img src={require('../../../assets/images/app/lowpoly.svg')} />
                    <div className='project-title'>
                        <h2>{props.title}</h2>
                        <h3>{props.subtitle}</h3>
                        <p>{props.desc}</p>
                        <AppButton buttonText="View Project" buttonPath={`${props.path}/${props.anchor}`} />
                    </div>
                </div>
            </div>
        </div>
    )
    
}



export default ProjectListItem;
