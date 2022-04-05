import React, { useEffect, useState } from 'react';
import Review from '../Data/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <p className='text-center text-3xl font-bold text-black'>All The Arms Reviews</p>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;