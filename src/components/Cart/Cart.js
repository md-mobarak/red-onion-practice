import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <div className='mx-auto d-flex justify-content-center'>
                <div className='d-flex justify-content-center'>
                    <p>Lunch</p>
                    <p className='ms-5'>Breakfast</p>
                    <p className='ms-5'>Dinner</p>
                </div>
            </div>
            <section>
                <form>
                    <h3>Edit Delivery Details</h3>
                    <hr />
                    <input type="text" name="name" placeholder='Deliver to Door' id="" />
                    <input type="text" name="" id="" placeholder='107 RD No 8' />
                    <input type="text" name="" id="" placeholder='Flat,Suit or floor' />
                    <input type="text" name="" id="" placeholder='Business Name' />
                    <input type="text" name="" id="" placeholder='Add Delivery Instructor' />
                    <button className='btn-cart'>Save & Continue</button>
                </form>
            </section>
        </div>
    );
};

export default Cart;