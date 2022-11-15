import React, {FunctionComponent} from 'react';
import './CreditCard.css';

import visa from '../../assets/visa.png';
import contactlesspayment from '../../assets/contactless-icon.png';

import { CreditCardProps } from './types';

export const CreditCard: FunctionComponent<CreditCardProps> = (props) => {
  return (
    <div className='CreditCard'>
      <div className='TopCard'>

        <img src={contactlesspayment} alt='contactless-payment'/>
        <img src={visa} alt='visa'/>
      </div>

      <p className='AccountNo'>{props.accountNo}</p>
      <div className='HeaderInfo'>
      <p>Card holder name</p>
      <p>Expiry date</p>
      <p>CVV</p>
      </div>
      <div className='Info'>
        <p>Nicholas Koech</p>
        <p>5/25</p>
        <p>625</p>

      </div>
      
    </div>
  );
};
