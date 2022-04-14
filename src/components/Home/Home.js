import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (

        <div>
            <div className='home-bg'>
                <div className=' home-info d-flex justify-content-center align-items-center'>
                    <div>
                        <h1>Best Food Waiting For Your Belly</h1>

                        <InputGroup className="mb-3">
                            <FormControl className='search'
                                placeholder="Search Food Items"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text className='search-btn' id="basic-addon2">search</InputGroup.Text>
                        </InputGroup>
                    </div>

                </div>

            </div >
            <section className='d-flex justify-content-center mt-5'>
                <div>
                    <NavLink className={({ isActive }) => (isActive ? 'active me-5' : 'inActive me-5')} to="/breakfast">BreakFast</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active me-5' : 'inActive me-5')} to="/lunch">Lunch</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active me-5' : 'inActive me-5')} to="/dinner">Dinner</NavLink>
                </div>
            </section>
        </div>

    );
};

export default Home;