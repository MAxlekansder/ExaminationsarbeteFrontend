import React, {useEffect, } from "react";
import './Home.css';
import useRecipeState from "../../State/indexState.tsx";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const getRecipe = useRecipeState((state)=>state.fetchRecipe)
    const recipe = useRecipeState((state)=>state.recipes)
    const navigate = useNavigate();

    useEffect(() => {
        getRecipe();
        console.log("Hej")
    }, [getRecipe])


    return (
        <div>

            <div style={{ backgroundColor: 'whitesmoke'}}>
                <div className="Home-container">
                    {/* Loopa igenom listan med recept och rendera en komponent för varje recept */}
                    {recipe.map((recipe) => (
                        <div key={recipe._id} onClick={()=>navigate(`/home/${recipe._id}`)}>
                        <div className="Recipe">
                            <h2>{recipe.title}</h2>

                            <img src={recipe.imageUrl} alt={recipe.title} />
                            <button onClick={() => console.log(recipe)}>View Recipe</button>
                        </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>    )
};
export default Home

