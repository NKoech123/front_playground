import React, {FunctionComponent, useState, useEffect} from 'react';
import CreditCardBehind from './CreditCardBehind';
import { CreditCard } from './CreditCard';
import { CreditCardProps } from './types';

const CardState: FunctionComponent<CreditCardProps> = (props) => {
    const [flip, setFlip] = useState<Boolean>(false);
  
    useEffect(() => {
      handleClick();
    
      return () => {
        handleClick()
      }
      }, [])
    
    const handleClick = () =>{
      if (!flip){
        setFlip(true)
      }else{
        setFlip(false)
      }
      
      console.log("Clicked")
    }
  return (
    <div onClick={()=>{handleClick()}}>
        {flip? 
        <CreditCardBehind/>
        :
        <CreditCard {...props}/>
         }
    </div>
  );
}


export default CardState;
