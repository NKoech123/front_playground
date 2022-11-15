import './RegularText.css';
import React, {FunctionComponent} from 'react'

// color 
export interface RegularTextProps {
    name: string;
    color: string;
    fontSize: string;
}
export const RegularText:FunctionComponent<RegularTextProps> = (props) => {
    const styleObject = {
        fontSize: props.fontSize,

    };
  return (
    <p style={styleObject}>{props.name}</p>
  );
};
