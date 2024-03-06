//Gustav
import './App.css';
import './NavBar.css'
import { useState, useEffect } from 'react';
import RecipeSearch from './components/RecipeSearchProps';
import NavBar from './components/NavBarComponent';
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
      <div className='header'>
          <NavBar />
      </div>
    <a className="logo" href="/"><img src="./Images/logo1" alt="" /></a>
      <div className='food-header'>
      </div>
    <RecipeSearch
        recipesFromInterface={recipes}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}

      />
     </div>
  );
}

export default App;
