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
   <div className="background-img" >
    {recipe.map((recipe) => (
        <div key={recipe._id} onClick={() => navigate(`/test/${recipe._id}`)}
         className="flex align-middle items-center relative ">
          <div className="absolute top-0 ">
            <h1 className="text-3xl titel-text text-center m-12 p-3  text-white" 
                style={{ backgroundColor: 'rgba(0, 130, 0, 0.5)'}}>{recipe.title}</h1>
               </div>
                  <div className="food-container inline-flex flex-row">
                    <img src={recipe.imageUrl} alt="" className="m-12 border shadow-lg  p-12 bg-gray-200"/>
                </div>
            <div>
              {recipe.description}
              {recipe.ratings}

              
        </div>
    </div>
  ))}
</div>
    <FooterComponent/>
    </>
  );
}

export default Test;
