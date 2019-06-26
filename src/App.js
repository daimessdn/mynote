import React from 'react';
import logo from './logo.svg';
import Card from './components/Card'
import './App.css';

function App() {
  const cards = [
    {
      id   : 433,
      title: 'Hello',
      desc : 'What\'s your name'
    },
    {
      id   : 434,
      title: 'Hi',
      desc : 'Nice to meet you'
    },
    {
      id   : 435,
      title: 'Lorem ipsum',
      desc : '... dolor sit amet ...'
    },
  ]

  return (
    <div className="card-group">
      <Card title="Hello" desc="What's your name" />
      <Card title="Hi" desc="Nice to meet you" />
      <Card title="Lorem ipsum" desc="... dolor sit amet ..." />
    </div>
  );
}

export default App;
