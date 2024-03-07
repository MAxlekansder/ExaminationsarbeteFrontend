import axios from 'axios';
import './App.css';
import './NavBar.css'
import { useState, useEffect } from 'react';
import { Recipe } from './data/Recipes';
import RecipeSearch from './components/RecipeSearchProps';
import NavBarComponent from './components/NavBarComponent';
import { SearchResultsList } from './components/SearchResultsList';


function App() {

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');


  const URL = 'https://sti-java-grupp2-afmbgd.reky.se/recipes';




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setRecipes(response.data);
        console.log(response.data); //bara för debugging ska tasbort inför produktion
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };

    fetchData();
  }, []);


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
