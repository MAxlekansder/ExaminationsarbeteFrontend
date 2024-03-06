import axios from 'axios';
import './App.css';
import './NavBar.css';
import { useState, useEffect } from 'react';
import { Recipe } from './types';
import RecipeSearch from './components/RecipeSearchProps';
import NavBar from './components/NavBarComponent';
import HomePage from './pages/HomePage';
import DishComponent from './components/DishComponent'; // Lägg till import av DishComponent
import dishes from './data/Dishes';
import { Route, Routes } from 'react-router-dom';



function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const URL = 'https://sti-java-grupp2-afmbgd.reky.se/recipes';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setRecipes(response.data);
        console.log(response.data); // bara för debugging, ta bort vid produktion
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
      <div className='food-header'></div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dishes' element={(
          <div>
            {dishes.map((dish, index) => (
              <DishComponent
                key={index}
                name={dish.name}
                image={dish.image}
                recipe={dish.recipe}
                ingredients={dish.ingredients}
                onClick={() => console.log(dish.recipe)} // Eller annan logik för att visa receptet.
              />
            ))}
          </div>
        )} />
      </Routes>
      <RecipeSearch
        recipesFromInterface={recipes}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
    </div>
  );
}

export default App;
