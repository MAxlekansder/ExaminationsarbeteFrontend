import './Styling/App.css';
import './Styling/NavBar.css';
import './Styling/Dishes.css';
import { useState, useEffect } from 'react';
import RecipeSearch from './components/SearchRecipe/RecipeSearchProps';
import NavBarComponent from './components/NavBarComponent'
import useRecipeState from './State/indexState';
import HomePage from './pages/HomePage';
import DishComponent from './components/DishComponent';
import dishes from './data/Dishes';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { recipes, fetchRecipe } = useRecipeState();
  console.log(dishes)

  useEffect(() => {
    fetchRecipe();

  }, []);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };


  return (
    <>
    <div>
      <NavBarComponent />
      <div className="food-header">
        <h1 className='welcome-text-header text-center font-bold text-7xl text-white'>
          Välkommen!
        </h1>
      </div>
    <div className="m-5 flex justify-center">
        <RecipeSearch
          recipesFromInterface={recipes}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        </div>
         
    </div>
    <div className='testa-laga-text bg-green-200'>
      <h1 className='text-center m-5 text-4xl p-12'>Testa att laga dagens lunch!</h1>
      </div>
    <div className='flex justify-center'>
      <Routes>
          {/* <Route path="/dishes/:id" element={<DishDetailsPage />} /> */}
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
                  description={dish.description}
                  ingredients={dish.ingredients}
                  onClick={() => console.log(dish.description)} // Eller annan logik för att visa receptet.
                />
              ))}
            </div>
          )} />
        </Routes>
        </div>
     
    </>

  );
}

export default App;
