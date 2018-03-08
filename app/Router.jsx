import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition';

import IntroRoute from './components/routes/Intro/Intro.jsx'
import WorkRoute from './components/routes/Work/Work.jsx'
import AboutRoute from './components/routes/About/About.jsx'
import ContactRoute from './components/routes/Contact/Contact.jsx'



function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}



function bounce(val) {
    return spring(val, {
        stiffness:200,
        damping: 40,
    });
}



const bounceTransition = {
    atEnter: {
        opacity: 0,
        scale: 1,
        // scale: 1.1,
    },
    
    atLeave: {
        opacity: bounce(0),
        scale: bounce(1),
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
		<Route exact path="/" component={IntroRoute} />
    	<Route path="/work" component={WorkRoute} />
        <Route path="/about" component={AboutRoute} />
		<Route path="/contact" component={ContactRoute} />
	</AnimatedSwitch>
)