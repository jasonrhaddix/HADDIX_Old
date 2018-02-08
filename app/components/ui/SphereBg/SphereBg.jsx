import React from 'react'
import ThreeRender from './js/three.js'



class SphereBg extends React.Component
{
    constructor(props, context)
    {
        super(props, context)

        this.state = {
            //
        }
    }

    componentDidMount() {
        this.refs.threeContainer.append(ThreeRender)
    }

    render() {

        return(
            <div className='container-spherebg'>
                <div ref='threeContainer' id='threeContainer' data-state={this.props.navOpen} />
            </div>
        )
    }
} 



export default SphereBg