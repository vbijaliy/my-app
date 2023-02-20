import React from 'react';
import { Base } from '../types';
interface BreadCrumbProps extends Base {
    arr: {
        display: string;
        routeTo: string;
    }[];
}
declare const BreadCrumb: React.FC<BreadCrumbProps>;
export default BreadCrumb;
