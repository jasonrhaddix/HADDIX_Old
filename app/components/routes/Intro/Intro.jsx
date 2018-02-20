import React from 'react'

import SphereBg from '../../containers/SphereBg'
import Logo from '../../containers/Logo'
import AppButton from '../../ui/AppButton/AppButton.jsx'


/*const mapStateToProps = (state) => {

    return {
        openNav: state.openNav
    }
}*/



class Intro extends React.Component
{
    constructor(props, context)
    {
        super(props, context)

        this.state = {
            // 
        }
    }


    componentDidMount() {
        this.props.history.push('/')
    }


    componentWillUnmount() {
        // 
    }


    render() 
    {
        return (
            <div className="intro-container">
                <SphereBg />
                <article className="title-container">
                    <Logo />
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
export default Intro
