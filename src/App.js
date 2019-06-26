import React from 'react';
import logo from './logo.svg';
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div className="card-group">
      <Card title="Hello" desc="What's your name" />
      <Card title="Hi" desc="Nice to meet you" />
      <Card title="Lorem ipsum" desc="... dolor sit amet ..." />
    </div>
  );
}

export default App;
