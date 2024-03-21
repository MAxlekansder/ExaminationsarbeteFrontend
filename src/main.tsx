import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Styling/index.css'
import HandleRequests from './components/AddRecipe/HandleRequestComponent.tsx';
import Home from "./Views/Home/Home.tsx";
import SubPage from "./Views/SubPage/SubPage.tsx";
import Recipe from './Views/Recipe/Recipe.tsx';
import PresentCocktails from './components/Cocktails/Cocktails.tsx';
import DetailedCocktailComponent from './components/Cocktails/DetailedCocktail.tsx';
import Test from './components/AddRecipe/Modal/TestPage.tsx';
import About from './pages/About.tsx';
import DetailedTestComponent from './components/AddRecipe/Modal/TestDetail.tsx';
import Categories from './pages/Categories.tsx';
import WeeklyTips from './pages/WeeklyTips.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/main-page' element="null" />
        <Route path='/add' element={<HandleRequests />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cocktails' element={<PresentCocktails />} />
        <Route path='/cocktails/:id' element={<DetailedCocktailComponent />} />
        <Route path='/subpage' element={<SubPage />} />
        <Route path='/test' element={<Test /> } />
        <Route path='/test/:id' element={<DetailedTestComponent />} />
        <Route path='/about' element={<About/> } />
        <Route path='/categories' element={<Categories/> } />
        <Route path='/weeklytips' element={<WeeklyTips/> } />
        <Route path='/recipe1' element={<Recipe title={"Köttbullar"} description={"Gör så här..."} />} />
        <Route path='/recipe2' element={<Recipe title={"Pizza"} description={"Gör så här..."} />} />
        <Route path='/recipe3' element={<Recipe title={"Kebab"} description={"Gör så här..."} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


