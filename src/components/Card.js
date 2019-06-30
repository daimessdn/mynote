import React, {Component} from 'react'

class Card extends Component {
	render() {
		return (
			<div className="card" style={{
				display   : 'absolute',
				marginLeft: this.props.x,
				marginTop : this.props.y,
				backgroundColor: this.props.color,
				boxShadow: [
					"0 0 0 1px #747547",
					"0 0 0 3px " + this.props.color
				]
			}}>
				<h1>{ this.props.title }</h1>
				<p>{ this.props.desc }</p>
			</div>
		)
	}
}

export default Card