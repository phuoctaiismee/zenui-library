import React from 'react';

const NewsBoard = () => {
    return (
        <div
            className='relative overflow-hidden w-full bg-gradient-to-r brightness-100 hover:brightness-125 to-primary from-[#9A04F5] h-[50px] flex items-center justify-center'>
            <img alt='image' src='https://i.ibb.co.com/qNvQzcm/image-317.png'
                 className='absolute top-3 640px:top-[-5px] 640px:left-1 left-0 w-[50px] 640px:w-[100px]'/>

            <p className='text-white text-[0.9rem] 640px:text-[1rem] text-center font-[400]'><b>ZenUI 2.2</b> Coming With E-Commerce Solution 🚀</p>

            <img alt='image' src='https://i.ibb.co.com/0MVyTcX/image-318.png'
                 className='absolute top-2 640px:top-[-20px] right-0 w-[100px] 640px:w-[160px]'/>
        </div>
    );
};

export default NewsBoard;
