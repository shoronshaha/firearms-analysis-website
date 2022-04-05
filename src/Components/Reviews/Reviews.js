import React from 'react';
import useReview from '../Hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <p className='text-center text-5xl font-bold text-black text-bold mb-10'><span className='text-red-500'>Customers </span> <span className='text-green-500'>Reviews</span>  </p>
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