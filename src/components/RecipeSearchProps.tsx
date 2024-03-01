import React from 'react';
import { Recipe } from "../types";

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
        {filteredRecipes.map((recipe,recipeId) => (
          <li key={recipeId}>
           <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
             {recipe.title}
          <img style={{width: '2vw'}} src={recipe.imageUrl} alt="" />
         </a>
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
    </div>
  );
};

export default RecipeSearch;
