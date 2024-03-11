//Gustav
import React from 'react';
import { Recipe } from "../data/Recipes";
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import '../App.css';



interface RecipeSearchProps {
  recipesFromInterface: Recipe[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const RecipeSearch: React.FC<RecipeSearchProps> = ({ recipesFromInterface, searchTerm, onSearchChange }) => {
  const filteredRecipes = recipesFromInterface.filter(getRecipe => {
    return getRecipe.title;
  });

  //Tillfällig styling direkt i img taggen
  const renderRecipes = searchTerm !== '' ? (
    <ul>
      {filteredRecipes.map((recipe, index) => (
        <li key={index}>{recipe.title}</li>
      ))}
    </ul>
  ) : null;

  return (

    <>
      <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Sök recept"
        />
        <div className="search-recipes">{renderRecipes}</div>
      </div>
    </>

  );
};

export default RecipeSearch;
