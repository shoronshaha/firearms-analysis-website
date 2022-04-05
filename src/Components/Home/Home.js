import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center m-10'>
                <div className=''>
                    <h1 className='text-6xl m-10 text-green-500'>FIRE ARMS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam earum voluptas commodi dolor aspernatur exercitationem enim. Aut fugit atque alias, earum quisquam at, non modi fuga, maxime fugiat laboriosam!</p>
                    <button className="mt-36 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full">
                        Button
                    </button>
                </div>
                <div className=''>
                    <img className='w-[300px]' src="https://raw.githubusercontent.com/mir-hussain/guns/main/guns/Browning.png" alt="" />
                </div>

            </div>

            <div>
                <h1 className='text-6xl text-green-500 my-20'>All Reviews(3)</h1>
            </div>

        </div>
    );
};

export default Home;