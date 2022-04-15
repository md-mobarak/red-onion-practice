import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import BreakFast from '../BreakFast/BreakFast';
import Dinner from '../Dinner/Dinner'
import Lunch from '../Lunch/Lunch';


const Food = () => {
    const [foods, setFoods] = useState([])
    const breakFast = foods.slice(0, 6)
    const dinner = foods.slice(6, 12)
    const lunch = foods.slice(12, 18)

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
        setFoods(dinner)
    }

    const handleLunch = () => {
        setFoods(lunch)
        // console.log(lunch);
    }






    return (
        <div>
            <div>

                <button onClick={() => handleBreakFast()} type="button" class="btn btn-link">Link</button>
                <button onClick={() => handleDinner()} type="button" class="btn btn-link">Link</button>
                <button onClick={() => handleLunch()} type="button" class="btn btn-link">Link</button>

            </div>
            {
                breakFast.map(breakFast => <BreakFast breakFast={breakFast}
                    key={breakFast.id}
                ></BreakFast>)
            }
            {
                dinner.map(dinner => <Dinner
                    key={dinner.id}
                    dinner={dinner}
                ></Dinner>)
            }
            {
                lunch.map(lunch => <Lunch key={lunch.id} lunch={lunch}></Lunch>)
            }


        </div>
    );
};

export default Food;