import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import HandleRequests from './components/HandleRequestComponent.tsx';
import Home from "./Views/Home/Home.tsx";
import SubPage from "./Views/SubPage/SubPage.tsx";
import Recipe from './Views/Recipe/Recipe.tsx';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/main-page' element="null" />
    <Route path='/add' element={<HandleRequests />} />
    <Route path='/home' element={<Home/>} />
    <Route path='/subpage' element={<SubPage/>} />
    <Route path='/recipe1' element={<Recipe title={"Köttbullar"} description={"Gör så här..."}/>} />
    <Route path='/recipe2' element={<Recipe title={"Pizza"} description={"Gör så här..."}/>} />
    <Route path='/recipe3' element={<Recipe title={"Kebab"} description={"Gör så här..."}/>} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
