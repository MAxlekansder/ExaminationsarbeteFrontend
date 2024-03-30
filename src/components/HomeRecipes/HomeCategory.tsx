import { useParams } from "react-router-dom";
import useRecipeState from "../../State/indexState";
import { useEffect } from "react";



function HomeCategory() {
    const getRecipes = useRecipeState((state) => state.fetchRecipe);

    useEffect(() => {
        getRecipes();
    }, [getRecipes])

    

    return (
        <div>
            hej
        </div>
    )
}

export default HomeCategory;