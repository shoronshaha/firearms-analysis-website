import React from 'react';

const Blogs = () => {
    return (

        <div>
            <h1 className='text-5xl text-center text-green-500 font-bold'>BLOGS</h1>
            <div className='justify-items-center mt-10 grid sm:grid-cols-1 md:grid-cols-3'>

                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-[450px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>What is Context API ?</h1>
                    <p className='text-center text-[16px]'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-[450px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>What is Semantic Tag?</h1>
                    <p className='text-center text-[16px]' >Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
                </div>
                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-[450px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>Difference between inline block and inline block element?</h1>
                    <p className='text-center text-[16px]'>inline-block It's formatted just like the inline element, where it doesn't start on a new line. BUT, you can set width and height values. block The element will start on a new line and occupy the full width available</p>
                    <p className='text-center text-[16px]'>Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. You'll have to declare display: inline-block in your CSS code. One common use for using inline-block is for creating navigation links horizontally, as shown below.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;