// Alexander

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeState from "../../../State/indexState";
import NavBarComponent from "../../NavBarComponent";
import FooterComponent from "../../Footer/FooterComponent";
import '../../../Styling/Dishes.css'
import '../../../Styling/Cocktail.css'





function Test() {
  const getRecipe = useRecipeState((state) => state.fetchRecipe);
  const recipe = useRecipeState((state) => state.recipes);


  const navigate = useNavigate();


  useEffect(() => {
    getRecipe();
  }, [getRecipe]);



  return (
   <>
   <NavBarComponent/>
   <div >
    {recipe.map((recipe) => (
        <div key={recipe._id} onClick={() => navigate(`/test/${recipe._id}`)}
         className="flex align-middle items-center relative">
          <div className="flex">
            <h1 className="text-5xl titel-text text-center m-12 absolute top-0 text-white bg-black">{recipe.title}</h1>
            </div>
          <div className="w-2/5 inline-flex flex-row">
          <img src={recipe.imageUrl} alt="" 
          className="m-12"
          />
          </div>
        </div>
      ))}
    </div>
    <FooterComponent/>
    </>
  );
}

export default Test;
