import React from 'react'
import DocumentTitle from 'react-document-title'



/*const mapStateToProps = (state) => {

    return {
        openNav: state.openNav
    }
}*/



class Home extends React.Component
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
            <DocumentTitle title='HADDIX | Work' className="home-container">
                This is the HOME page.
            </DocumentTitle>
        )
    }
} 



// const Container = connect(mapStateToProps)(Home)
export default Home
