// Kristian

import { useState } from 'react';
import { Link } from 'react-router-dom';



const WeeklyTips = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);



    return (
        <div onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} className='relative'>
            <a href="/" className='px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500'>
                Veckans tips
            </a>
            {isDropdownOpen && (
                <div className='absolute z-10 left-0 mt-1 w-96 bg-white border rounded shadow-lg'>
                    <div className="flex flex-wrap justify-around">
                        <Link to="/monday-recipe" className='block px-5 py-2 hover:bg-green-300'>Monday</Link>
                        <Link to="/tuesday-recipe" className='block px-5 py-2 hover:bg-green-300'>Tuesday</Link>
                        <Link to="/wednesday-recipe" className='block px-5 py-2 hover:bg-green-300'>Wednesday</Link>
                        <Link to="/thursday-recipe" className='block px-5 py-2 hover:bg-green-300'>Thursday</Link>
                        <Link to="/friday-recipe" className='block px-5 py-2 hover:bg-green-300'>Friday</Link>
                        <Link to="/saturday-recipe" className='block px-5 py-2 hover:bg-green-300'>Saturday</Link>
                        <Link to="/sunday-recipe" className='block px-5 py-2 hover:bg-green-300'>Sunday</Link>

                    </div>
                </div>
            )}
        </div>
    )
}

export default WeeklyTips