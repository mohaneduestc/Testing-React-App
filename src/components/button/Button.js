import React from 'react';
import './button.css';

const Button = ({label}) => (
    <div data-testid="button" className="button-style">
        {label}
    </div>
);

export default Button;
