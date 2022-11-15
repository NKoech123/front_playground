import React from 'react';
import './App.css';
import { CreditCard } from './components/CreditCard/CreditCard';

function App() {
  const obj = {accountNo: "5655 3423 34234"}
  return (
    <div className="App">
      <CreditCard {...obj}/>  
    </div>
  );
}

export default App;
