import React from 'react';

const Review = ({ review }) => {
    const { name, img, rating, description, } = review;
    return (
        <div className='rounded-lg shadow-lg bg-gray-50 max-w-sm p-5 h-[400px] hover:bg-blue-50 mx-2 my-3'>
            <div className='flex rounded-full w-[100px]  '>
                <img className='rounded-full ' src={img} alt="" />
                <h1 className='text-2xl text-center p-5'>{name}</h1>
            </div>
            <div>
                <p className='p-10'>{description}</p>
                <p className='text-center'><span>Rating: {rating}</span></p>
            </div>

        </div>
    );
};

export default Review;