import React from 'react';

const Lunch = ({ lunch }) => {
    const { name, img, price, id } = lunch
    return (
        <div>
            <h1>name:{name}</h1>
        </div>
    );
};

export default Lunch;