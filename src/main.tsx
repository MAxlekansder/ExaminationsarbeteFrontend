import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Styling/index.css'
import HandleRequests from './components/AddRecipe/HandleRequestComponent.tsx';
import Home from "./Views/Home/Home.tsx";
import Recipe from './Views/Recipe/Recipe.tsx';
import PresentCocktails from './components/Cocktails/Cocktails.tsx';
import DetailedCocktailComponent from './components/Cocktails/DetailedCocktail.tsx';
import Test from './components/AddRecipe/Modal/TestPage.tsx';
import About from './pages/About.tsx';
import DetailedTestComponent from './components/AddRecipe/Modal/TestDetail.tsx';
import Categories from './pages/Categories.tsx';
import WeeklyTips from './components/WeeklyTips/WeeklyTips.tsx';
import CocktailCategory from './components/Cocktails/CocktailCategory.tsx';
import RecipeDetails from "./Views/Recipe/Recipe.tsx";
//Simon flyttar ut koden i sprint 3!
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/main-page' element="null" />
        <Route path='/add' element={<HandleRequests />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cocktails' element={<PresentCocktails />} />
        <Route path='/home/:id' element={<RecipeDetails />} />

        <Route path='/cocktails/:id' element={<DetailedCocktailComponent />} />
        <Route path='/cocktails/:id' element={<DetailedCocktailComponent />} />
        <Route path='/cocktail:category' element={<CocktailCategory />} />
        <Route path='/test' element={<Test />} />
        <Route path='/test/:id' element={<DetailedTestComponent />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/weeklytips' element={<WeeklyTips />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


