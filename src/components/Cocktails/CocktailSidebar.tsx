// Alexander

import React, { useState } from "react";
import useRecipeState from "../../State/indexState";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

function CocktailSidebarComponent() {
  const getNonAlcoholicDrinks = useRecipeState((state) => state.fetchNonAlcoholicDrinks);
  const getAlcoholicDrinks = useRecipeState((state) => state.fetchAlcoholicDrinks);

  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(Boolean);


  const handleCategory = (category: string) => {setOpenCategories((previousCategory) =>
        previousCategory.includes(category) ? previousCategory.filter((item) => item !== category)
        : [...previousCategory, category]
    );
  };

  return (
    <div className="flex h-full bg-white text-black">
      <div className="w-64 bg-white">
        <div className="p-4">
          <h2 className="text-lg font-bold">Drinkar</h2>
        </div>
        <div>
          <ul>
            <li className="py-3 px-4">
              <button
                className="cursor-pointer flex items-center hover:underline"
                onClick={() => handleCategory("alcoholic")}>
                <span>Alkoholhaltiga drinkar</span>
                {openCategories.includes("alcoholic") ? (
                  <FaAngleDown className="ml-2" /> ) : "" 
                  //  can include an arrow right as well
                }
              </button>
              {openCategories.includes("alcoholic") && (
                <ul className="ml-4">
                  <li>
                    <button 
                      className="hover:underline"
                      onClick={() => console.log("Martini test till api fetch")}
                    >
                      Martini
                    </button>
                  </li>
                  <li>
                    <button 
                      className="hover:underline"
                      onClick={() => console.log("Gin test till api fetch")}
                    >
                      Gin
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li className="py-3 px-4">
            <button
                className="cursor-pointer flex items-center hover:underline"
                onClick={() => handleCategory("nonAlcoholic")}>
                <span>Alkoholfria drinkar</span>
                {openCategories.includes("nonAlcoholic") ? (
                  <FaAngleDown className="ml-2" /> ) : ""
                  // can include an arrow right as well
                  } 
              </button>
              {openCategories.includes("nonAlcoholic") && (
                <ul className="ml-4">
                  <li>
                    <button
                      className="hover:underline"
                      onClick={() => console.log("NonAlco till api fetch")}
                    >
                      fresh
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CocktailSidebarComponent;
