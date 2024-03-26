// Kristian

import React, { useEffect, useState } from 'react'
import useRecipeState from '../../State/indexState'

function WeekDays() {

    const recipes = useRecipeState((state) => state.recipes);
    const [dailyRecipe, setDailyRecipe] = useState(null);

    const filterRecipesByCategory = (category: string[]) => {
        const filteredRecipes = recipes.filter((recipe) => recipe.categories === category);

        return filteredRecipes;
    };


    useEffect(() => {
        if (recipes.length === 0) {

            useRecipeState.getState().fetchRecipe();
        }
    }, [recipes]);


    return (
        <div>WeekDays</div>
    )
}

export default WeekDays