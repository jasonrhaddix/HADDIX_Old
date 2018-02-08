import React from 'react';


const Project = (props) => {

    return (
        <div className='project-container col-sm-12 col-lg-12'>
            <div className='project-container-inner'>
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
            </div>
        </div>
    )
    
}

export default Project;
