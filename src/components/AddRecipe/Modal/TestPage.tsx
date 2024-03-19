// Alexander

import { useState, useEffect } from "react";
import Modal from "./Modal";
import Recipe from "../../../Views/Recipe/Recipe";
import { useNavigate } from "react-router-dom";
import useRecipeState from "../../../State/indexState";

function Test() {
  const getRecipe = useRecipeState((state) => state.fetchRecipe);
  const recipe = useRecipeState((state) => state.recipes);
  


  const navigate = useNavigate();

  useEffect(() => {
    getRecipe();
  }, [getRecipe]);




  const navigateToRecipeId = (id: string) => {
    navigate(`/test/${id}`);
  };

  return (
    <div>
      hej
      <div>
      </div>
      {recipe.map((recipe) => (
        <div key={recipe._id} onClick={() => navigateToRecipeId(recipe._id)}>
          {recipe._id}
          {recipe.title}
          <img src={recipe.imageUrl} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Test;
