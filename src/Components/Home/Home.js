import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReview from '../Hooks/useReview';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReview();
    const navigate = useNavigate();

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center m-10'>
                <div className='m-10'>
                    <h1 className='text-4xl text-green-500'>A <span className='text-red-500 text-5xl font-bold'>Gun</span> In The Hand</h1>
                    <h1 className='text-3xl text-green-500'>Is Better Than</h1>
                    <h1 className='text-4xl text-green-500'>A <span className='text-red-500 text-5xl font-bold'>Cop</span> On The Phone</h1>
                    <p className='mt-5'>A FireArm having a long barrel with a spirally grooved interior, which imparts to the bullet spinning motion and thus greater accuracy over a longer range!</p>
                    <button className="mt-28 bg-red-500 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full">
                        Button
                    </button>
                </div>
                <div className=''>
                    <img className='w-[300px]' src="https://raw.githubusercontent.com/mir-hussain/guns/main/guns/Browning.png" alt="" />
                </div>

            </div>

            <div>
                <h1 className='text-6xl text-green-500 text-center'>All Reviews(3)</h1>
            </div>
            <div>
                <div className='md:grid md:grid-cols-3 md:gap-5'>
                    {
                        reviews.map(review => review.id < 4 && <Review key={review.id} review={review}></Review>)
                    }
                </div>

                <div className='flex justify-center'>
                    <button onClick={() => navigate('/Reviews')} className='bg-red-500 py-3 px-14 rounded-lg hover:bg-green-500 text-white font-bold'>
                        See More Reviews
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Home;