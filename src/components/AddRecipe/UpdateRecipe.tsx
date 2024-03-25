// Alexander

import React, { useState } from 'react'
import { Recipe } from '../../data/Recipes'
import useRecipeState from '../../State/indexState';

interface ChangeRecipeProps{
    recipeId: Recipe;

}


function UpdateRecipeComponent({recipeId}: ChangeRecipeProps){
    const [updateRecipe, setUpdateRecipe] = useState<Partial<Recipe>>({});
    const getUpdate = useRecipeState((state) => state.updateRecipes)


    const test = () => {

    }

    return (
        <div>
            <input type="text" /> {/* for title*/}
            <input type="text" /> {/* for description*/}
            <input type="text" /> {/* for imageUrl*/}
            <input type="text" /> {/* for timInMins*/}
            <input type="text" /> {/* for categories  save these for later*/}
            <input type="text" /> {/* for instructions   save these for later*/}
            <input type="text" /> {/* for ingredients  save these for later*/}
        
            <button onClick={() => test}></button>
        </div>
    )

}


export default UpdateRecipeComponent