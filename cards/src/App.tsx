import React from 'react';
import './App.css';

import CardState from './components/CreditCard/CardState';

import { cardData } from './components/Data/cardData';

function App() {

  return (
    <div className="App">
      {
      cardData.map((cardInfo, index)=> {
        return (
          <div key={index}>
             <CardState {...cardInfo}/> 
          </div>
        );
      })}
       
    </div>
  );
}

export default App;
