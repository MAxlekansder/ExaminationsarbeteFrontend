// Alexander
//Design by Gustav
//Fixa Idag 2024-03-21!!!!

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRecipeState from "../../State/indexState";
import '../../Styling/Cocktail.css'
import NavBarComponent from "../NavBarComponent";
import FooterComponent from "../Footer/FooterComponent";




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
    <>
    <NavBarComponent />
    <div className="relative">
      <button className="absolute">
           hej
        </button>
      
    </div>
      <div className="flex align-middle justify-center relative main-container">
        <div className="bg-green-700 m-12 text-green-700">.</div>
            {detailedDrink.map((drink) => (
              <div key={drink.idDrink}>
                <h1 
                    className="
                      text-4xl
                      italic
                      text-center
                      mt-10
                      bg-green-500
                      p-10
                      rounded-lg
                      titel-text
                      
                     ">
                        {drink.strDrink}
                  </h1>
              <img 
                  src={drink.strDrinkThumb} 
                  alt="" 
                  className="flex justify-center align-middle m-12 rounded-lg"
                  
                  
                />
                 <div className="instruction-text text-xl">
                  <br />
                  {drink.strInstructions}
                </div>
            </div>
            
          ))}
            <div className="bg-green-700 m-12 text-green-700">.</div>
        </div>
        <div className="m-20 p-20">
          
        </div>
    <FooterComponent />
  </>
)
}

export default DetailedCocktailComponent;