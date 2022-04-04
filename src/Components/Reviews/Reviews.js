import React, { useEffect, useState } from 'react';
import Rifle from '../Rifle/Rifle';

const Reviews = () => {
    const [rifles, setRifles] = useState([])

    useEffect(() => {
        fetch("rifle.json")
            .then(res => res.json())
            .then(data => setRifles(data))
    }, [])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <p className='text-center text-3xl font-bold text-black'>All The Arms Reviews</p>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center'>
                {
                    rifles.map(rifle => <Rifle
                        key={rifle.id}
                        rifle={rifle}
                    ></Rifle>)
                }
            </div>
        </div>
    );
};

export default Reviews;