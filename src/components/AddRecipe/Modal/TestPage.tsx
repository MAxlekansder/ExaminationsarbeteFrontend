// Alexander

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeState from "../../../State/indexState";
import NavBarComponent from "../../NavBarComponent";




function Test() {
  const getRecipe = useRecipeState((state) => state.fetchRecipe);
  const recipe = useRecipeState((state) => state.recipes);


  const navigate = useNavigate();


  useEffect(() => {
    getRecipe();
  }, [getRecipe]);



  return (
    <div>
      hej
      <NavBarComponent/>
      <div>
      </div>
      {recipe.map((recipe) => (
        <div key={recipe._id} onClick={() => navigate(`/test/${recipe._id}`)}>
          {recipe._id}
          {recipe.title}
          <img src={recipe.imageUrl} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Test;
