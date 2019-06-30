import React, {Component} from 'react';
// import logo from './logo.svg';

import Card from './components/Card'
import cardContent from './components/cardContent'
import './App.css';

class App extends Component {
	render() {

		const myCards = cardContent.map(card => 
			<Card
				key={card.id}
				title={card.title}
				desc={card.desc}
				x={card.x}
				y={card.y}
			/>)

		return (
			<div className="card-group">
				<div className="card card-add">
					<form>
						<div className="form-inline">
							<input type="text" name="title" placeholder="Title" />
							<button type="submit">+</button>
						</div>
						<textarea name="desc" placeholder="Description"></textarea>
					</form>
				</div>
				{myCards}
			</div>
		);
	}
}

export default App;
