import React from 'react'
import { Link, withRouter } from 'react-router-dom'



class CloseButton extends React.Component
{
	constructor(props) {
        super(props)

        this.state = {
            showCloseButton: false,
            currentPath: ""
        }

        this.pathRegEx = /work\/(.*)([a-z][A-Z])?/g
        this.setButtonState = this.setButtonState.bind(this)
    }


    componentWillMount()
    {
        this.setButtonState()
        this.setState({ currentPath : this.props.currentPath })
        
        this.props.history.listen(() => {
           this.setButtonState()
        });
    }


    setButtonState()
    {
        var path = this.props.history.location.pathname
        var buttonState = ( this.pathRegEx.test(path) ) ?  true : false
        this.setState({ showCloseButton: buttonState, currentPath: path })
    }


	render()
	{

		return (
			<div className={`close-button ${this.state.showCloseButton}`}>
				<Link to={this.props.buttonPath}>
						<div className="button-text">{this.props.buttonText}</div>
				</Link>
			</div>
		)
	}
}



export default withRouter(CloseButton)
