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
                        <Link to="/recipe/monday" className='block px-5 py-2 hover:bg-green-300'>Måndag</Link>
                        <Link to="/recipe/tuesday" className='block px-5 py-2 hover:bg-green-300'>Tisdag</Link>
                        <Link to="/recipe/wednesday" className='block px-5 py-2 hover:bg-green-300'>Onsdag</Link>
                        <Link to="/recipe/thursday" className='block px-5 py-2 hover:bg-green-300'>Torsdag</Link>
                        <Link to="/recipe/friday" className='block px-5 py-2 hover:bg-green-300'>Fredag</Link>
                        <Link to="/recipe/saturday" className='block px-5 py-2 hover:bg-green-300'>Lördag</Link>
                        <Link to="/recipe/sunday" className='block px-5 py-2 hover:bg-green-300'>Söndag</Link>

                    </div>
                </div>
            )}
        </div>
    )
}

export default WeeklyTips