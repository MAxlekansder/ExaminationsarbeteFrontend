import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import HandleRequests from './components/HandleRequestComponent.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/main-page' element="" />
    <Route path='/add' element={<HandleRequests />} />
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
