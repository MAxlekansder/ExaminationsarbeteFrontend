import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Styling/index.css'
import HandleRequests from './components/AddRecipe/HandleRequestComponent.tsx';
import Home from "./Views/Home/Home.tsx";
import PresentCocktails from './components/Cocktails/CocktailComponent.tsx';
import DetailedCocktailComponent from './components/Cocktails/DetailedCocktailComponent.tsx';
import DetailedRecipe from "./pages/DetailedRecipe/DetailedRecipe.tsx";




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/main-page' element="null" />
        <Route path='/add' element={<HandleRequests />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cocktails' element={<PresentCocktails />} />
        <Route path='/cocktails/:id' element=<DetailedCocktailComponent/> />
        <Route path='/recipe/:id' element={<DetailedRecipe/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


