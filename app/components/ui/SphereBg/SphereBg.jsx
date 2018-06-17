import React from 'react'
// import ThreeRender from './js/three.js'
import ThreeRender_Opt from './js/three-optimize.js'



class SphereBg extends React.Component
{
    constructor(props, context)
    {
        super(props, context)

        this.state = {
            focus: false
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.refs.threeContainer.appendChild(ThreeRender_Opt)
        this.setState({ focus: true })
    }

    componentWillUnmount() {
        this.setState({ focus: false })
    }

    render() {
        return(
            <div className='container-spherebg'>
                <div ref='threeContainer' id='threeContainer' data-focus={this.state.focus} />
            </div>
        )
    }
} 



export default SphereBg