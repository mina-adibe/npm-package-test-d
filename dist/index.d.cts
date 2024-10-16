import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    primary?: boolean;
    disabled?: boolean;
    className?: string;
}

declare const Button: React.FC<ButtonProps>;

interface ButtonProps2 {
    label: string;
    onClick: () => void;
    primary?: boolean;
    disabled?: boolean;
    className?: string;
}

declare const Button2: React.FC<ButtonProps2>;

export { Button, Button2, type ButtonProps, type ButtonProps2 };
