import React from 'react';

const Dinner = () => {
    const img = 'https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMHdhdGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80s'
    // console.log(dinner);
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Dinner;