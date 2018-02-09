import React from 'react'

import ProjectsList from '../../containers/ProjectsList'



/*const mapStateToProps = (state) => {

    return {
        openNav: state.openNav
    }
}*/



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
                <ProjectsList />
            </div>
        )
    }
} 



// const Container = connect(mapStateToProps)(Work)
export default Work
