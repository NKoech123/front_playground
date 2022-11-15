import React, {FunctionComponent} from 'react';

import './CreditCard.css';

import { CreditCardProps } from './types';

export const CreditCard: FunctionComponent<CreditCardProps> = (props) => {
  return (
    <div>{props.name}</div>
  );
};
