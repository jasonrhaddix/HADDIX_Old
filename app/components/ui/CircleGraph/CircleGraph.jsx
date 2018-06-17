import React from 'react'



class CircleGraph extends React.Component
{
	constructor(props)
	{
		super(props)
	}


	componentWillMount()
	{
		
	}


	componentDidMount()
	{
		let percent = this.props.percent

		let circle_Canvas = this.refs.circleGraphCanvas;
		let circle_Context = circle_Canvas.getContext("2d")
		let percentToRadian = (360 * (Math.PI/180) / 100 )
		
		let x = circle_Canvas.width / 2
	    let y = circle_Canvas.height / 2
	    let startAngle = 0 * Math.PI
	    let counterClockwise = false

	    var endAngle = 100 * percentToRadian
	    var radius = 60
	    circle_Context.beginPath()
	    circle_Context.arc(x, y, radius, startAngle, endAngle, counterClockwise)
	    circle_Context.lineWidth = 3
	    circle_Context.strokeStyle = '#3100bd'
	    circle_Context.stroke()

	    var endAngle = percent * percentToRadian
      	var radius = 55
      	circle_Context.beginPath()
	    circle_Context.arc(x, y, radius, startAngle, endAngle, counterClockwise)
	    circle_Context.lineWidth = 2
	    circle_Context.strokeStyle = '#ff4f00'
	    circle_Context.stroke()
	}


	render() {
	 	return (
	 		<div className="circle-graph">
				<canvas id="circle-graph-canvas" ref="circleGraphCanvas" height="140" width="140"></canvas>
				<div className="circle-graph-text">
					<p className="percentage">{this.props.percent + "%"}</p>
					<p className="language">{this.props.language}</p>
				</div>
			</div>
 		)
	 }
}



export default CircleGraph