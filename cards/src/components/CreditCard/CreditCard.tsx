import React, {FunctionComponent} from 'react';
import './CreditCard.css';

import { CreditCardProps } from './types';

export const CreditCard: FunctionComponent<CreditCardProps> = (props) => {

  return (
    
    <div className='CreditCard'>
      <div className='TopCard'>
        <img src={props.contactlessPaymentIcon} alt='contactless-payment'/>
        <img src={props.visaIcon} alt='visa'/>
      </div>

      <p className='AccountNo'>{props.accountNo}</p>

      <div className='HeaderInfo'>
        <p>Card holder name</p>
        <p>Expiry date</p>
        <p>CVV</p>
      </div>
      <div className='Info'>
          <p>{props.name}</p>
          <p>{props.expiryDate}</p>
          <p>{props.cvv}</p>
      </div>
    </div>
  );
};
