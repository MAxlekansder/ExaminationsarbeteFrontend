import React from 'react';
import { RecipeInterface } from "../types";

interface RecipeSearchProps {
  recipesFromInterface: RecipeInterface[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const RecipeSearch: React.FC<RecipeSearchProps> = ({ recipesFromInterface, searchTerm, onSearchChange }) => {
  const filteredRecipes = recipesFromInterface.filter(getRecipe => {
    return getRecipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const renderRecipes = searchTerm !== '' ? (
    <ul>
      {filteredRecipes.map((recipe, index) => (
        <li key={index}>{recipe.name}</li>
      ))}
    </ul>
  ) : null;

  return (
    <div>
      <input 
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
