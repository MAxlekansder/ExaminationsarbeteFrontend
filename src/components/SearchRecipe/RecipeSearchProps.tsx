//Gustav
import React from 'react';
import { Recipe } from "../../data/Recipes";
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import '../../Styling/App.css'

interface RecipeSearchProps {
  recipesFromInterface: Recipe[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
}



function RecipeSearch({ recipesFromInterface, searchTerm, onSearchChange }: RecipeSearchProps) {
  const filteredRecipes = recipesFromInterface.filter(recipe => {
    return recipe && recipe.title && recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

//Tillfällig styling direkt i img taggen
  const renderRecipes = searchTerm !== '' ? (
    <ul>
      {filteredRecipes.map((recipe, index) => (
        <li key={index} className='recipe-text-on-search'>
          <a href="" className=''>{recipe.title},&nbsp;
            <span className='italic'>{recipe.description}
            </span>
          </a>
        </li>

      ))}
    </ul>
  ) : null;

  return (
    <>
      <div className='input-wrapper'>
        <FaSearch id='searchIcon' className='search-icon' />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Sök recept"
        />
      </div>
      <div className='search-recipes'>
        {renderRecipes}
      </div>

    </>
  );
};

export default RecipeSearch;