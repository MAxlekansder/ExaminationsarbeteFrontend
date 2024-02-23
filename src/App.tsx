import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import { RecipeInterface } from './types';
import RecipeSearch from './components/RecipeSearchProps';

function App() {
  const [recipes, setRecipes] = useState<RecipeInterface[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const URL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        const recipeData: RecipeInterface[] = response.data.results.map((get: any) => {
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
      <h1>Recipes</h1>
      <RecipeSearch 
        recipesFromInterface={recipes} 
        searchTerm={searchTerm} 
        onSearchChange={handleSearchChange} 
      />
    </div>
  );
}

export default App;
