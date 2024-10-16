import React from 'react';
import type {ButtonProps} from "./types.js";



const Button: React.FC<ButtonProps> = ({label, onClick, primary = false, disabled = false, className = ''}) => {
    const baseClass = 'reusable-button';
    const combinedClassName = `${baseClass} 
        ${primary ? 'primary' : 'secondary'} 
        ${disabled ? 'disabled' : ''} 
        ${className}`;

    return (
        <button
            className={combinedClassName}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;