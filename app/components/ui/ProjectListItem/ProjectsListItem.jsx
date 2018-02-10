import React from 'react';
import {Link} from 'react-router-dom';


const ProjectListItem = (props) => {

    return (
        <div className='project-container col-sm-12 col-lg-12'>
            <div className='project-container-inner'>
                <Link to={`${props.path}/jason`} >
                <div className='project-background'>
                    <div><img src={props.images[0]} /></div>
                    <video></video>
                </div>
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
