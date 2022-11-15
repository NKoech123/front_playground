import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CreditCard } from './components/CreditCard/CreditCard';

function App() {
  const obj = {name: "Nicholas Koech"}
  return (
    <div className="App">
      <div className='CardBox'>
        <CreditCard {...obj}/>
      </div>      
    </div>
  );
}

export default App;
