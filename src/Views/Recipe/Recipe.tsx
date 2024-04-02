import React, {useEffect, } from 'react'
import { useParams,} from "react-router-dom";
import Title from "./Components/Title/Title.tsx";
import useRecipeState from "../../State/indexState.tsx";
import {Recipe} from "../../data/Recipes";
import { LiaBlenderPhoneSolid } from 'react-icons/lia';



const RecipeDetails = () => {
    const {id} = useParams<{ id: string }>()
    const getRecipe = useRecipeState((state) => state.fetchSpecificRecipe)
    const detailedRecipe = useRecipeState((state) => state.detailedRecipe as Recipe)

    useEffect(() => {
        if (id) {
            getRecipe(id);
            console.log(id);
        }
    }, [getRecipe, id]);
    


    return (
    <div>
        <div className="Recipe-link relative">
            <h1>{detailedRecipe.title}</h1>
                <div className="Recipe flex">
                    <img src={detailedRecipe.imageUrl} className="mr-4" />
                    
                <div className="">
            <h2 className="2xl:text-2xl font-mono">Instructions step by step</h2>
        {detailedRecipe.instructions?.map((step, index) => (
    <div className="flex items-center mb-2 " key={index}>
<input
    id={`bordered-checkbox-${index}`}
    type="checkbox"
    value=""
    name="bordered-checkbox"
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
        <label
              htmlFor={`bordered-checkbox-${index}`}
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500 "
                >
                {step}
            </label>
          </div>
        ))}
      </div>
    </div>
</div>
            
     

           <div>
            <h6>Ingredienser</h6>
            {detailedRecipe.ingredients?.map(ingredient => (
                <p>{ingredient.name}</p>
            ))}
            </div>
          
          
        <p>{detailedRecipe.ratings}</p>
    </div>
    )
}

export default RecipeDetails
