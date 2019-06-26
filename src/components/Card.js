import React from 'react'

function Card(props) {
	return (
		<div class="card">
			<h1>{ props.title }</h1>
			<p>{ props.desc }</p>
		</div>
	)
}

export default Card