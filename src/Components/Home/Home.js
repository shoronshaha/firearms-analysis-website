import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center m-10'>
                <div className='m-10'>
                    <h1 className='text-6xl text-green-500'>FIRE ARMS</h1>
                    <p className='mt-5'>A FireArm having a long barrel with a spirally grooved interior, which imparts to the bullet spinning motion and thus greater accuracy over a longer range!</p>
                    <button className="mt-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full">
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
                <div>

                </div>

                <div >
                    <Link
                        to='/reviews'
                        className='w-full mb-2 py-2 px-3 text-white mt-3 mx-2 bg-cyan-600 sm:w-auto sm:mb-0'
                    >
                        See All Reviews
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Home;