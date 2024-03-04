import React from 'react';

const Header = ({ shuffleSet, newBox, shuffleNew, drawDomino }) => {
    return (
        <div className='flex justify-evenly items-center bg-blue-400 w-[100%] h-16 mt-20 sticky top-0 z-20'>
            <div className='flex justify-evenly items-center bg-blue-100 w-[100%] h-14  sticky top-0 z-30 '>
                <h1 onClick={shuffleNew} className=' text-xs text-blue-900 sm:text-sm md:text-lg text-center cursor-pointer font-bold'>Get Shuffled Set</h1>
                <h1 onClick={shuffleSet} className=' text-xs text-blue-900 sm:text-sm md:text-lg text-center cursor-pointer font-bold'>Shuffle Set</h1>
                <h1 onClick={drawDomino} className=' text-xs text-blue-900 sm:text-sm md:text-lg text-center cursor-pointer font-bold'>Draw Domino</h1>
                <h1 onClick={newBox} className='text-xs text-blue-900 sm:text-sm md:text-lg text-center cursor-pointer font-bold'>Get New Box</h1>
            </div>
        </div>
    )
};

export default Header;