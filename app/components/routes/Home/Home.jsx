import React from 'react'



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
            <div className="home-container">
                This is the HOME page.
            </div>
        )
    }
} 



// const Container = connect(mapStateToProps)(Home)
export default Home
