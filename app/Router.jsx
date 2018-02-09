import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition';

import Intro from './components/routes/Intro/Intro.jsx'
import Home from './components/routes/Home/Home.jsx'
import Work from './components/routes/Work/Work.jsx'
import About from './components/routes/About/About.jsx'



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



export default (
	<AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
        className="route-wrapper">
		<Route exact path="/" component={Intro} />
    	<Route path="/work" component={Work} />
		<Route path="/about" component={About} />
	</AnimatedSwitch>
)