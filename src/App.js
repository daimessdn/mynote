import React, {Component} from 'react';
// import logo from './logo.svg';

import Card from './components/Card'
import cardContent from './components/cardContent'
import './App.css';

class App extends Component {
	render() {

		const myCards = cardContent.map(card => <Card key={card.id} title={card.title} desc={card.desc} />)

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
				<Card
					title="My small achievement..."
					desc="I've succeeded to create Laravel migrations through phpmyadmin. L'it... :)"
				/>
				<Card
					title="Important Question from Martha"
					desc="How many children does Mr. John have if he had four daughters and each daughter has one brother?"
				/>
				<Card
					title="Quotes from Albert Camus"
					desc="“You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.”"
				/>
				<Card title="Hello" desc="What's your name" />
				<Card title="Hi" desc="Nice to meet you" />
				<Card
					title="Reservoir Fluid Homework"
					desc="McCain, William D. Jr - read about gas hydrate."
				/>
				<Card
					title="Study for Projects"
					desc="Machine learning for getting an oil production data."
				/>
				<Card title="Lorem ipsum" desc="... dolor sit amet ..." />
			</div>
		);
	}
}

export default App;
