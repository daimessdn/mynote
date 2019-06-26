import React from 'react';
import logo from './logo.svg';
import Card from './components/Card'
import './App.css';

function App() {
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
      <Card
        title="Important Question from Martha"
        desc="How many children does Mr. John have if he had four daughters and each daughter has one brother?"
      />
      <Card title="Hello" desc="What's your name" />
      <Card title="Hi" desc="Nice to meet you" />
      <Card title="Lorem ipsum" desc="... dolor sit amet ..." />
    </div>
  );
}

export default App;
