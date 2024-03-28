// Kristian

import React, { useEffect, useState } from 'react';
import useRecipeState from '../State/indexState';
import NavBarComponent from '../components/NavBarComponent';
import { Recipe } from '../data/Recipes';

const WeeklyTips: React.FC = () => {
  const { recipes } = useRecipeState();
  const [filteredRecipes, setFilteredRecipes] = useState<any[]>([]);


  const FilterRecipes = (category: string) => {

    setFilteredRecipes(recipes.filter((recipe) => recipe.categories.includes(category)))
    return filteredRecipes;
  };


  useEffect(() => {
    if (recipes.length === 0) {

      useRecipeState.getState().fetchRecipe();
    }
  }, [recipes]);

  return (

    <div>
      <NavBarComponent />
      <div className="bg-white p-4" >
        <div className='text-center text-2xl font-semibold text-gray-700 mb-4'>New taste, everyday!</div>
        <div className='flex items-center justify-center gap-1'>
          <button onClick={() => { FilterRecipes("Meat") }} className='bg-green-200 text-gray-700 px-4 py-2 rounded border border-green-600 shadow hover:bg-green-300 focus:outline-none focus:ring focus:border-green-300'>Monday</button>
          <button onClick={() => { FilterRecipes("Fish") }} className='bg-green-200 text-gray-700 px-4 py-2 rounded border border-green-600 shadow hover:bg-green-300 focus:outline-none focus:ring focus:border-green-300'>Tuesday</button>
          <button onClick={() => { FilterRecipes("French") }} className='bg-green-200 text-gray-700 px-4 py-2 rounded border border-green-600 shadow hover:bg-green-300 focus:outline-none focus:ring focus:border-green-300'>Wednesday</button>
          <button onClick={() => { FilterRecipes("Japanese") }} className='bg-green-200 text-gray-700 px-4 py-2 rounded border border-green-600 shadow hover:bg-green-300 focus:outline-none focus:ring focus:border-green-300'>Thursday</button>
          <button onClick={() => { FilterRecipes("Mexican") }} className='bg-green-200 text-gray-700 px-4 py-2 rounded border border-green-600 shadow hover:bg-green-300 focus:outline-none focus:ring focus:border-green-300 '>Friday</button>
          <button onClick={() => { FilterRecipes("Italian") }} className='bg-green-200 text-gray-700 px-4 py-2 rounded border border-green-600 shadow hover:bg-green-300 focus:outline-none focus:ring focus:border-green-300 '>Saturday</button>
          <button onClick={() => { FilterRecipes("Swedish") }} className='bg-green-200 text-gray-700 px-4 py-2 rounded border border-green-600 shadow hover:bg-green-300 focus:outline-none focus:ring focus:border-green-300 '>Sunday</button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {filteredRecipes && filteredRecipes.map((recipe, index) => (
          <div key={index} className="w-60">
            <h2 className="text-lg font-bold">{recipe.title}</h2>
            <div className="h-48 w-full overflow-hidden rounded-lg"> {/* Container with fixed height */}
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-full object-cover" // object-cover ensures the image covers the space, maintaining aspect ratio
              />
            </div>
          </div>
        ))
        }
      </div >
    </div >
  );
};
{/* Lägg till mer information eller komponenter som du behöver */ }

export default WeeklyTips;