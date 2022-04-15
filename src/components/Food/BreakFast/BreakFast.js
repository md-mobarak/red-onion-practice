import React from 'react';
import { NavLink } from 'react-router-dom';

const BreakFast = ({ breakFast }) => {
    const { id, img, price, name } = breakFast
    // console.log(breakFast);
    return (
        <div>
            <h1>name{name}</h1>
        </div>
    );
};

export default BreakFast;