import './Styling/App.css';
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
        <h1 className='
        welcome-text-header text-center font-bold text-7xl text-white
        opacity-90'>
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
    <div className='testa-laga-text bg-green-200 m-20 mt-0'>
      <h1 className='text-center m-5 text-4xl p-12'>Testa att laga dagens lunch!</h1>
      </div>
    <div className='flex justify-center'>
    <div className='bg-green-700 ml-10 mr-10 text-green-700'>.</div>
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
        <div className='bg-green-700 ml-10 mr-10 text-green-700'>.</div>
      </div>
      <div className='flex'>
        <p className='text m-20 pl-10 pr-10 italic '>
          Vill du ge din lunch en uppfriskande twist? 
          Testa dagens lunchtips och upptäck nya smaker som kommer att förgylla din dag!   
          Vår samling av läckra recept är noggrant utvalda för att erbjuda dig 
          både smakrik variation och enkelhet i vardagen.
        </p>
      </div>
      <div className='testa-laga-text bg-green-600 m-20 mt-0 '>
      <h1 className='text-center m-5 text-4xl p-12'>Testa att laga dagens middag!</h1>
      </div>
    <div className='flex justify-center'>
    <div className='bg-green-300 ml-10 mr-10 text-green-300'>.</div>
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
        <div className='bg-green-300 ml-10 mr-10 text-green-300'>.</div>
      </div>
      <div className='flex'>
        <p className='text m-20 pl-10 pr-10 italic '>
        Är du redo att krydda upp din kvällsmåltid? Utforska dagens middagstips och låt dig 
        inspireras av en värld av fantastiska smaker och enkelhet på tallriken! 
        Vår samling av välsmakande recept är noga utvalda för att erbjuda dig en spännande resa till nya kulinariska höjder.
        </p>
      </div>
      
    <div className='bg-green-900'>
        <footer>
          <p className='text-white text-center text-xs '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore expedita non, aperiam ipsam pariatur ab, fugiat facilis mollitia assumenda similique beatae vel nulla! Culpa reiciendis quidem, voluptatem unde modi quia.
            </p>
         <h1 className='flex justify-start pt-20  text-white'>
              Copyright © 2024 Recept.nu . All Rights Reserved
              </h1>
          </footer> 
        </div>
    </>

  );
}

export default App;
