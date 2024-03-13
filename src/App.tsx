import './App.css';
import './NavBar.css'
import { useState, useEffect } from 'react';
import RecipeSearch from './components/RecipeSearchProps';
import NavBarComponent from './components/NavBarComponent'
import useRecipeState from './State/indexState';
import HomePage from './pages/HomePage';
import DishComponent from './components/DishComponent';
import dishes from './data/Dishes';
import { Route, Routes } from 'react-router-dom';
import DishDetailsPage from './pages/DishDetailsPage';


function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { recipes, fetchRecipe } = useRecipeState();

  useEffect(() => {

    fetchRecipe();

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
          onSearchChange={handleSearchChange}
        />
        <Routes>
          <Route path="/dishes/:id" element={<DishDetailsPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/dishes' element={(
            <div>
              {dishes.map((dish, index) => (
                <DishComponent
                  id={dish.id}
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
      </div>
    </div>

  );
}

export default App;
