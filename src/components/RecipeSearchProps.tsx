//Gustav
import React from 'react';
import { Recipe } from "../data/Recipes";
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import '../App.css'


interface RecipeSearchProps {
  recipesFromInterface: Recipe[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const RecipeSearch: React.FC<RecipeSearchProps> = ({ recipesFromInterface, searchTerm, onSearchChange }) => {
  const filteredRecipes = recipesFromInterface.filter(recipe => {
    return recipe && recipe.title && recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  

  //Tillfällig styling direkt i img taggen
  const renderRecipes = searchTerm !== '' ? (
    <ul>
      {filteredRecipes.map((recipe, index) => (
        <li key={index} className='recipe-text-on-search'>
            {recipe.title}&nbsp;
              <span style={{fontStyle: 'italic'}}>
            {recipe.description}
          </span>
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
      <div className='search-recipes underline'>{renderRecipes}</div>
      
    </>
  );
};

export default RecipeSearch;
