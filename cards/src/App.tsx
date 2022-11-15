import React, {useState, useEffect} from 'react';
import './App.css';
import { CreditCard } from './components/CreditCard/CreditCard';
import CreditCardBehind from './components/CreditCard/CreditCardBehind';

import visa from './assets/visa.png';
import contactlesspayment from './assets/contactless-icon.png';

const cardData = [
  {
  name: "Nicholas Koech",
  accountNo: "5655 3423 34234",
  expiryDate: "5/22",
  cvv: "314",
  contactlessPaymentIcon: contactlesspayment,
  visaIcon: visa,
 },
 {
  name: "Collins Metto",
  accountNo: "3455 5423 90404",
  expiryDate: "1/24",
  cvv: "904",
  contactlessPaymentIcon: contactlesspayment,
  visaIcon: visa,
 },
 {
  name: "Elizabeth Kariuki",
  accountNo: "9055 2233 903424",
  expiryDate: "9/25",
  cvv: "240",
  contactlessPaymentIcon: contactlesspayment,
  visaIcon: visa,
 }

];

function App() {
  const [flip, setFlip] = useState<Boolean>(false);
  
  // useEffect(() => {
  //   handleClick();
  
  //   return () => {
  //     handleClick()
  //   }
  //   }, [flip])
  
  const handleClick = () =>{
    setFlip(true)
    console.log("Clicked")
  }


  return (
    <div className="App"  onClick={()=>{handleClick()}}>
      {flip?
      <CreditCardBehind/>:
      cardData.map((cardInfo, index)=> {
        return (
          <div key={index}>
             <CreditCard {...cardInfo}/> 
          </div>
        );
         
        }
      )}
       
    </div>
  );
}

export default App;
