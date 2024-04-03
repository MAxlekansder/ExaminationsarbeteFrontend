import {useEffect, } from 'react'
import { useParams,} from "react-router-dom";
import Title from "./Components/Title/Title.tsx";
import useRecipeState from "../../State/indexState.tsx";
import {Recipe} from "../../data/Recipes";



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

            <h1>Recipe</h1>
            <div className="Recipe-link">

                <div className="Recipe" key="index">
                    <img src={detailedRecipe.imageUrl}/>
                    <button>View Recipe</button>
                </div>
            </div>

            <Title title={detailedRecipe.title}/>
           <div>{detailedRecipe.title}</div>
            <h6>Ingredienser</h6>
            {detailedRecipe.ingredients?.map(ingredient => (
                <p>{ingredient.name}</p>
            ))}
            <br/>
            <h6>Gör så här</h6>
            {detailedRecipe.instructions?.map(step => (
                <p>{step}</p>
            ))}
            <br/>
            <p>{detailedRecipe.ratings}</p>

        </div>
    )
}

export default RecipeDetails
