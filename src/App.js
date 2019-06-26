import React from 'react';
import logo from './logo.svg';
import Card from './components/Card'
import './App.css';

import cardContent from './components/cardContent'



function App() {
 
  const content = cardContent.map(card => <Card key={card.id} title={card.title} desc={card.desc} />)

  return (
    <div className="card-group">
      { content }
      <Card title="Hello" desc="What's your name" />
      <Card title="Hi" desc="Nice to meet you" />
      <Card title="Lorem ipsum" desc="... dolor sit amet ..." />
    </div>
  );
}

export default App;
