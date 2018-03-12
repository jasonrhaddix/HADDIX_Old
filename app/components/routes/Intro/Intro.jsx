import React from 'react'

import SphereBg from '../../containers/SphereBg'
import Logo from '../../containers/Logo'
import AppButton from '../../ui/AppButton/AppButton.jsx'

import { toggleNav } from '../../../actions'





class IntroRoute extends React.Component
{
    constructor(props, context)
    {
        super(props, context)

        this.state = {
            /* */
        }
    }


    componentDidMount() {
        this.props.history.push('/')

        appStore.dispatch(
          toggleNav( false )
        )
    }


    render() 
    {
        return (
            <div className="intro-container">
                <SphereBg />
                <article className="title-container">
                    <Logo animate={true}/>
                    <div className="subtitle">
                        <p>Portfolio for Jason R Haddix</p>
                    </div>
                    <div className="intro-divider"/>
                    <AppButton buttonText="View Work" buttonPath="/work" />
                </article>
            </div>
        )
    }
} 



// const Container = connect(mapStateToProps)(Home)
export default IntroRoute
