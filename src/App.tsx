import axios from 'axios';
import './App.css';
import './NavBar.css'
import { useState, useEffect } from 'react';
import { Recipe } from './types';
import RecipeSearch from './components/RecipeSearchProps';
import NavBar from './components/NavBarComponent';

function App() {

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); 


  const URL = 'https://sti-java-grupp2-afmbgd.reky.se/recipes';
  



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        const recipeData: Recipe[] = response.data.results.map((get: any) => {
          return { name: get.name };
        });
        setRecipes(recipeData);
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
