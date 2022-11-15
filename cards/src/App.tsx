import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CreditCard } from './components/CreditCard/CreditCard';

function App() {
  const obj = {name: "Nicholas Koech"}
  return (
    <div className="App">
      <CreditCard {...obj}/>  
    </div>
  );
}

export default App;
