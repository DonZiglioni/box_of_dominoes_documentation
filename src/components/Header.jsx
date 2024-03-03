import React from 'react';

const Header = ({ shuffleSet, newBox, shuffleNew, drawDomino }) => {
    return (
        <div className='flex justify-evenly items-center bg-slate-400 w-[100%] h-14 mt-24 sticky top-0 z-10 '>
            <h1 onClick={shuffleNew} className=' text-xs sm:text-sm md:text-lg text-center cursor-pointer font-semibold'>Get Shuffled Set</h1>
            <h1 onClick={shuffleSet} className=' text-xs sm:text-sm md:text-lg text-center cursor-pointer font-semibold'>Shuffle Set</h1>
            <h1 onClick={drawDomino} className=' text-xs sm:text-sm md:text-lg text-center cursor-pointer font-semibold'>Draw Domino</h1>
            <h1 onClick={newBox} className='text-xs sm:text-sm md:text-lg text-center cursor-pointer font-semibold'>Get New Box</h1>
        </div>
    )
};

export default Header;