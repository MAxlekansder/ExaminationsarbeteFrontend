// Kristian

import React from 'react'
import useRecipeState from '../../State/indexState'

function WeekDays() {

    const getRecipes = useRecipeState((state) => state.fetchRecipe);








    return (
        <div>WeekDays</div>
    )
}

export default WeekDays