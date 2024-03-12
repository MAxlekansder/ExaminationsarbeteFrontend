// Alexander

import React from 'react'
import { Recipe } from '../../data/Recipes'
import useRecipeState from '../../State/indexState';

interface ChangeRecipeProps{
    recipeId: Recipe;
}

const getApiKey = useRecipeState((state) => state.updateRecipes)

function UpdateRecipeComponent({recipeId}: ChangeRecipeProps){



}


export default UpdateRecipeComponent