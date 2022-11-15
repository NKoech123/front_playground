import React from 'react';
import './App.css';
import { CreditCard } from './components/CreditCard/CreditCard';

import visa from './assets/visa.png';
import contactlesspayment from './assets/contactless-icon.png';

const obj = {
  name: "Nicholas Koech",
  accountNo: "5655 3423 34234",
  expiryDate: "5/22",
  cvv: "314",
  contactlessPaymentIcon: {contactlesspayment},
  visaIcon: {visa},
};
console.log(obj)
function App() {

  return (
    <div className="App">
      <CreditCard {...obj}/>  
    </div>
  );
}

export default App;
