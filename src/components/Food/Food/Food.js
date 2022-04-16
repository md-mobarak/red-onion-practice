import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import BreakFast from '../BreakFast/BreakFast';
import Dinner from '../Dinner/Dinner'
import Lunch from '../Lunch/Lunch';


const Food = () => {
    const [foods, setFoods] = useState([])
    const breakFast = foods.slice(0, 6)
    const dinner = foods.slice(6, 12)
    const lunch = foods.slice(12, 18)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('Food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handleBreakFast = () => {
        setFoods(breakFast)
        // console.log(breakFast);
    }

    const handleDinner = () => {
        // console.log(dinner);
        navigate(<Dinner></Dinner>)
    }

    const handleLunch = () => {
        // setFoods(lunch)
        // console.log(lunch);

    }


    return (
        <div>
            <div>

                <button onClick={() => handleBreakFast()} type="button" class="btn btn-link">Link</button>
                <button onClick={() => handleDinner()} type="button" class="btn btn-link">Link</button>
                <button onClick={() => handleLunch()} type="button" class="btn btn-link">Lunch</button>

            </div>


        </div>
    );
};

export default Food;