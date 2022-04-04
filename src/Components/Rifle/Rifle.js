import React from 'react';

const Rifle = ({ rifle }) => {
    const { name, id, img, description, userImage, price, rating, userName, text } = rifle;
    return (
        <div className=' my-10 shadow-lg rounded-2xl w-[250px] bg-white p-4 '>
            <div >
                <img src={img} alt="" />
            </div>
            <div>
                <h1 className='text-2xl'>Name:{name}</h1>
                <p>Id: {id}</p>
                <p>Description:{description}</p>
            </div>
        </div>
    );
};

export default Rifle;