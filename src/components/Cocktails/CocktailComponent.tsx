// Alexander

import { useEffect, useState } from "react";
import useRecipeState from "../../State/indexState";




function PresentCocktails() {
    const getRecipe = useRecipeState((state) => state.fetchRecipe);
    const getDrinks = useRecipeState((state) => state.fetchDrinks);
    const drinks = useRecipeState((state) => state.drinks);
    const recipes = useRecipeState((state) => state.recipes);

    useEffect(() => {
        getDrinks();
    }, [getDrinks])



    return(
        <div>
        <p className="text-xl font-bold mb-4">tänkbara drinkar</p>
        <div className="flex flex-wrap -mx-2">
            {drinks.slice(0,10).map((drink) => (
                <div key={drink.idDrink} className="w-1/3 px-2 mb-4">
                    <div className="bg-white p-4 shadow-md">
                        <p className="text-lg font-semibold">
                        {drink.strDrink}, 
                        {drink.strAlcoholic}, 
                        {drink.strCategory},
                        {drink.strIngredient1}
                        </p>
                        <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full h-auto mb-2" />
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default PresentCocktails;