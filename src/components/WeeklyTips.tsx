import React, { useState } from 'react';

const WeeklyTips = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} className='relative'>
            <a href="/" className='px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500'>
                Weekly tips
            </a>
            {isDropdownOpen && (
                <div className='absolute z-10 left-0 mt-1 w-96 bg-white border rounded shadow-lg'>
                    <div className="flex flex-wrap justify-around">
                        <a href="/" className='block px-5 py-2 hover:bg-green-300'>Monday</a>
                        <a href="/" className='block px-5 py-2 hover:bg-green-300'>Tuesday</a>
                        <a href="/" className='block px-5 py-2 hover:bg-green-300'>Wednesday</a>
                        <a href="/" className='block px-5 py-2 hover:bg-green-300'>Thursday</a>
                        <a href="/" className='block px-5 py-2 hover:bg-green-300'>Friday</a>
                        <a href="/" className='block px-5 py-2 hover:bg-green-300'>Saturday</a>
                        <a href="/" className='block px-5 py-2 hover:bg-green-300'>Sunday</a>
                    </div>
                </div>
            )}



        </div>
    )
}

export default WeeklyTips