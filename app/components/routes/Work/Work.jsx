import React from 'react'
import { Route, Link } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition';

import DocumentTitle from 'react-document-title'

import ProjectsList from '../../containers/ProjectsList'
import ProjectsDetail from '../../containers/ProjectDetail'



/*const mapStateToProps = (state) => {

    return {
        openNav: state.openNav
    }
}*/
function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}



function bounce(val) {
    return spring(val, {
        stiffness:300,
        damping: 30,
    });
}



const bounceTransition = {
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
};


class Work extends React.Component
{
    constructor(props, context)
    {
        super(props, context)

        this.state = {
            // 
        }

    }


    componentDidMount() {
        // 
    }


    componentWillUnmount() {
        // 
    }


    render() 
    {
        return (
            <div className="work-container">
                <AnimatedSwitch
                            atEnter={bounceTransition.atEnter}
                            atLeave={bounceTransition.atLeave}
                            atActive={bounceTransition.atActive}
                            mapStyles={mapStyles}
                            className="route-wrapper">
                        <Route exact path={`${this.props.match.path}`} component={ProjectsList} />
                        <Route path={`${this.props.match.path}/:name`} component={ProjectsDetail}/>
                    </AnimatedSwitch>
            </div>
        )
    }
} 



// const Container = connect(mapStateToProps)(Work)
export default Work
