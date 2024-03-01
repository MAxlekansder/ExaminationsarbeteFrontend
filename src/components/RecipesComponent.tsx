import React, { useState } from "react";
import { Link } from "react-dom"


interface RecipeInterface {
  id: number,
  name: string
}

const RecipesComponent = () => {
  const [recipe, setRecipe] = useState<RecipeInterface[]>()


  return (
    <div>

    </div>
  );
};

export default RecipesComponent;
