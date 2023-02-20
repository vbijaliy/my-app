import React from 'react';
import { Base } from '../types';
interface ButtonProps extends Base {
    label: string;
    handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
