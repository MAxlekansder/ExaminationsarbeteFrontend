import './Styling/App.css';
import './Styling/Dishes.css';
import { useState, useEffect, SetStateAction } from 'react';
import RecipeSearch from './components/SearchRecipe/RecipeSearchProps';
import NavBarComponent from './components/NavBarComponent'
import useRecipeState from './State/indexState';
import HomePage from './pages/HomePage';
import FooterComponent from './components/Footer/FooterComponent';
import WeeklyTips from './pages/WeeklyTips';
import HandleRequests from './components/AddRecipe/HandleRequest';
import Home from './components/HomeRecipes/Home';
import HomeCategory from './components/HomeRecipes/HomeCategory';
import Categories from './pages/Categories';
import About from './pages/About';
import DetailedTestComponent from './components/AddRecipe/Modal/TestDetail';
import Test from './components/AddRecipe/Modal/TestPage';
import CocktailCategory from './components/Cocktails/CocktailCategory';
import DetailedCocktailComponent from './components/Cocktails/DetailedCocktail';
import RecipeDetails from './Views/Recipe/Recipe';
import PresentCocktails from './components/Cocktails/Cocktails';
import { Route, Routes } from "react-router-dom";


function App() {
 return (
  <div >
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<HandleRequests />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:category' element={<HomeCategory />} />
        <Route path='/home/:id' element={<RecipeDetails />} />
        <Route path='/cocktails' element={<PresentCocktails />} />
        <Route path='/cocktails/:id' element={<DetailedCocktailComponent />} />
        <Route path='/cocktail:category' element={<CocktailCategory />} />
        <Route path='/test' element={<Test />} />
        <Route path='/test/:id' element={<DetailedTestComponent />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/weeklytips' element={<WeeklyTips />} />
      </Routes>
    
      
  </div>

  

  );
}

export default App;
