import React from 'react';

const NewsBoard = () => {
    return (
        <div
            className='relative overflow-hidden w-full bg-gradient-to-r brightness-100 hover:brightness-125 to-primary from-[#9A04F5] h-[50px] flex items-center justify-center'>
            <img alt='image' src='https://i.ibb.co.com/Ns7HHmB/confetti.png'
                 className='absolute top-6 640px:top-0 left-0 w-[50px] 640px:w-[90px] opacity-80'/>

            <p className='text-white text-[0.9rem] 640px:text-[1rem] font-[400]'>E-Commerce Components & Blocks Coming 🚀</p>

            <img alt='image' src='https://i.ibb.co.com/Ns7HHmB/confetti.png'
                 className='absolute top-6 640px:top-0 right-0 w-[50px] 640px:w-[90px] opacity-80 rotate-[260deg]'/>
        </div>
    );
};

export default NewsBoard;
