import React, {Component} from 'react'

class Card extends Component {
	render() {
		return (
			<div className="card" style={{
				display: 'absolute',
				x      : this.props.x,
				y      : this.props.y
			}}>
				<h1>{ this.props.title }</h1>
				<p>{ this.props.desc }</p>
			</div>
		)
	}
}

export default Card