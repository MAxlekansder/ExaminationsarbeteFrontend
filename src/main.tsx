import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import './Styling/index.css'


//Simon flyttar ut koden i sprint 3!
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
      <App/>
     </BrowserRouter> 
  </React.StrictMode>,
)


