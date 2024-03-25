// Kristian

import { useState } from 'react';
import { Link } from 'react-router-dom';
import useRecipeState from '../../State/indexState';



const WeeklyTips = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // const fetchRandomRecipe = useRecipeState((state) => state.fetchRandomRecipe);

    const handleDayClick = () => {
        // fetchRandomRecipe();
        setIsDropdownOpen(false);
    }

    return (
        <div onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} className='relative'>
            <a href="/" className='px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500'>
                Veckans tips
            </a>
            {isDropdownOpen && (
                <div className='absolute z-10 left-0 mt-1 w-96 bg-white border rounded shadow-lg'>
                    <div className="flex flex-wrap justify-around">
                        <Link to="/monday-recipe" onClick={handleDayClick} className='block px-5 py-2 hover:bg-green-300'>Monday</Link>
                        <Link to="/tuesday-recipe" onClick={handleDayClick} className='block px-5 py-2 hover:bg-green-300'>Tuesday</Link>
                        <Link to="/wednesday-recipe" onClick={handleDayClick} className='block px-5 py-2 hover:bg-green-300'>Wednesday</Link>
                        <Link to="/thursday-recipe" onClick={handleDayClick} className='block px-5 py-2 hover:bg-green-300'>Thursday</Link>
                        <Link to="/friday-recipe" onClick={handleDayClick} className='block px-5 py-2 hover:bg-green-300'>Friday</Link>
                        <Link to="/saturday-recipe" onClick={handleDayClick} className='block px-5 py-2 hover:bg-green-300'>Saturday</Link>
                        <Link to="/sunday-recipe" onClick={handleDayClick} className='block px-5 py-2 hover:bg-green-300'>Sunday</Link>

                    </div>
                </div>
            )}
        </div>
    )
}

export default WeeklyTips