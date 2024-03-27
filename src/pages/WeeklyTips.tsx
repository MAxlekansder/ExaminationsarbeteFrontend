// Kristian

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useRecipeState from '../State/indexState';
import NavBarComponent from '../components/NavBarComponent';

const WeeklyTips: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { recipes } = useRecipeState();
  const [filteredRecipes, setFilteredRecipes] = useState<any[]>([]);


  const filterRecipesByCategory = (category: string) => {
    const filteredRecipes = recipes.filter((recipe) => recipe.categories.includes("lunch"));

    return filteredRecipes;
  };


  useEffect(() => {
    if (recipes.length === 0) {

      useRecipeState.getState().fetchRecipe();
    }
  }, [recipes]);

  return (

    <div onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} className='relative'>
      <a href="/" className='px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500'>
        Weekly Tips
      </a>

      {isDropdownOpen && (
        <div className='absolute z-10 left-0 mt-1 w-96 bg-white border rounded shadow-lg'>
          <div className="flex flex-wrap justify-around">
            <Link to="/WeeklyTips" className='block px-5 py-2 hover:bg-green-300'>Monday</Link>
            <Link to="/WeeklyTips" className='block px-5 py-2 hover:bg-green-300'>Tuesday</Link>
            <Link to="/WeeklyTips" className='block px-5 py-2 hover:bg-green-300'>Wednesday</Link>
            <Link to="/WeeklyTips" className='block px-5 py-2 hover:bg-green-300'>Thursday</Link>
            <Link to="/WeeklyTips" className='block px-5 py-2 hover:bg-green-300'>Friday</Link>
            <Link to="/WeeklyTips" className='block px-5 py-2 hover:bg-green-300'>Saturday</Link>
            <Link to="/WeeklyTips" className='block px-5 py-2 hover:bg-green-300'>Sunday</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyTips;