import React from 'react';
import { Link } from 'react-router-dom';


export const Button = (props) => {
    const template = <div
        style={{
            background: props.bck,
            fontSize: props.size,
            color: props.color,
            ...props.add
        }}>
        {props.children}
    </div>
    
    return template;
}