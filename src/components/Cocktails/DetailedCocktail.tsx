// Alexander

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRecipeState from "../../State/indexState";


interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strGlass: string;

  }

  

function DetailedCocktailComponent() {
  const { id } = useParams<{ id: string }>(); 
  const fetchSpecificDrink = useRecipeState((state) => state.fetchSpecificDrink);
  const detailedDrink = useRecipeState((state) => state.detailedDrink)

  useEffect(() => {
    if (id) {
        fetchSpecificDrink(id); 
    }
  }, [fetchSpecificDrink, id]);

  if (!detailedDrink || Object.keys(detailedDrink).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1>hej</h1>
        <div>
        {detailedDrink.map((drink) => (
            <div key={drink.idDrink}>
                <p>
                    {drink.idDrink}
                    {drink.strDrink} <br />
                    {drink.strIngredient1}
                    <img src={drink.strDrinkThumb} alt="" />
                </p>
            </div>
            
        ))}
           
    </div>
    </div>
  )
}

export default DetailedCocktailComponent;