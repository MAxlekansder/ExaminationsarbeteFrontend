//Gustav
import './App.css';
import './NavBar.css'
import { useState, useEffect } from 'react';
import RecipeSearch from './components/RecipeSearchProps';
import NavBarComponent from './components/NavBarComponent'
import useRecipeState from './State/indexState';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const {recipes, fetchRecipe} = useRecipeState();
   
  useEffect(() => {
    fetchRecipe();
  
  },[fetchRecipe])

const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <NavBarComponent />
      <div className='food-header'>
      </div>
      <div className="search-bar-container">
        <RecipeSearch
          recipesFromInterface={recipes}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange} />
      </div>

    </div>
  );
}

export default App;
