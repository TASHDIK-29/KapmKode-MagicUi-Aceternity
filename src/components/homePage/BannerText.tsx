import React from 'react';

const BannerText = () => {
    return (
        <div className='flex flex-col items-center justify-center w-5/6 mx-auto space-y-10'>
            <div className='text-center space-y-2'>
                <h1 className='text-5xl text-black font-semibold '>We have really speed up  our  workflow</h1>
                <p className='text-base w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quibusdam id dignissimos exercitationem assumenda recusandae sed provident rerum beatae fuga?</p>
            </div>
            <div className='space-x-2  flex items-center justify-center'>
                <button className='flex items-center gap-3 border-2 py-1 px-4 font-semibold rounded-sm text-base text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#121212" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg> Start Learning Today
                </button>
                <button className='bg-violet-600 py-1 px-2 rounded-sm text-white text-base'>Join Now</button>
            </div>
        </div>
    );
};

export default BannerText;