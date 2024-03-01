import React, { useState } from "react";

//Redunant kan rederas helt 
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
