import React from 'react';
import { Recipe } from "../types";
import {NavLink} from "react-router-dom";

interface RecipeSearchProps {
  recipesFromInterface: Recipe[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const RecipeSearch: React.FC<RecipeSearchProps> = ({ recipesFromInterface, searchTerm, onSearchChange }) => {
  const filteredRecipes = recipesFromInterface.filter(getRecipe => {
    return getRecipe.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  //Tillfällig styling direkt i img taggen
  const renderRecipes = searchTerm !== '' ? (
    <ul>
      {filteredRecipes.map((recipe, index) => (
        <li key={index}>{recipe.title}
        <img style={{width: '1.5vw'}} src={recipe.imageUrl} alt="maträtt" />
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div>
      <input
        className='searchBar'
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search recipes"
      />
      {renderRecipes}
     <NavLink to="/recipe1"><li>Köttbullar</li></NavLink>
    </div>
  );
};

export default RecipeSearch;
