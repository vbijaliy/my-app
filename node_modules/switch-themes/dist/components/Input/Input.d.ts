import React from 'react';
import { Base } from '../types';
interface InputProps extends Base {
    placeHolder: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<InputProps>;
export default Input;
