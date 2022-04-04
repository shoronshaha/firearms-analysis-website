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
                <p>Price: {price}</p>
                <div className='p-4 border-2'>
                    <h1 className='text-xl text-bold text-center'>comment</h1>
                    <p className='flex p-4'><span><img className='w-5 rounded-lg ' src={userImage} alt="" /></span> Name: {userName}</p>
                    <p>Text:{text}</p>
                    <p>Rating: {rating}</p>

                </div>

            </div>
        </div>
    );
};

export default Rifle;