import React from 'react'
import DocumentTitle from 'react-document-title'

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
            <DocumentTitle title='HADDIX | Work' className="work-container">
                <ProjectsList />
            </DocumentTitle>
        )
    }
} 



// const Container = connect(mapStateToProps)(Work)
export default Work
