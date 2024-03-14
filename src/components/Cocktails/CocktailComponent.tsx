// Alexander

import { useEffect, useState } from "react";
import useRecipeState from "../../State/indexState";
import NavBarComponent from "../NavBarComponent";

function PresentCocktails() {
  const getDrinks = useRecipeState((state) => state.fetchDrinks);
  const drinks = useRecipeState((state) => state.drinks);

  useEffect(() => {
    getDrinks();
  }, [getDrinks]);

  return (
    <div>
      <NavBarComponent/>
      <h1 className="text-xl font-bold mb-4">tänkbara drinkar</h1>
      <div className="flex flex-wrap -mx-2">
        {drinks.slice(0, 9).map((drink) => (
          <div key={drink.idDrink} className="w-1/3 px-2 mb-4">
            <div className="bg-white p-4 shadow-md">
              <p className="text-lg font-semibold">
                {drink.strDrink},{drink.strAlcoholic},{drink.strCategory},
                {drink.strIngredient1}
              </p>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-full h-auto mb-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PresentCocktails;
