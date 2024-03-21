import React, { useEffect, useState } from "react";
import useRecipeState from "../../State/indexState";
import NavBarComponent from "../NavBarComponent";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PresentCocktails() {
  const getCategoryDrinks = useRecipeState((state) => state.fetchSpecificDrinkIngredient);
  const categoryDrinks = useRecipeState((state) => state.categoryDrinks)
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Gin");
  const navigate = useNavigate();



  useEffect(() => {
    fetchSpecificCategory(selectedCategory);
  }, [selectedCategory]);

  const navigateCocktailId = (id: string) => {
    navigate(`/cocktails/${id}`);
  };

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
    setOpenCategories((previousCategory) =>
      previousCategory.includes(category) ? previousCategory.filter((item) => item !== category) : [...previousCategory, category]
    );
  };

  const fetchSpecificCategory = async (category: string) => {
    try {
      await getCategoryDrinks(category.toLowerCase());
    } catch (error) {
      console.log("Error fetching category drinks:", error);
    }
  };

  return (
    <div>
      <NavBarComponent />
      <div>
        <p>tänkbara drinkar</p>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-1/5">
          <div className="w-64 bg-white">
            <div className="p-4">
              <h2 className="text-lg font-bold">Drinkar</h2>
            </div>
            <div>
              <ul>
                <li className="py-3 px-4">
                  <button
                    className="cursor-pointer flex items-center hover:underline"
                    onClick={() => handleCategory("alcoholic")}
                  >
                    <span>Alkoholhaltiga drinkar</span>
                    {openCategories.includes("alcoholic") ? <FaAngleDown className="ml-2" /> : ""}
                  </button>
                  {openCategories.includes("alcoholic") && (
                    <ul className="ml-4">
                      <li>
                        <button className="hover:underline" onClick={() => handleCategory("Gin")}>
                          Gin
                        </button>
                      </li>
                      <li>
                        <button className="hover:underline" onClick={() => handleCategory("Vodka")}>
                          Vodka
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="py-3 px-4">
                  <button
                    className="cursor-pointer flex items-center hover:underline"
                    onClick={() => handleCategory("nonAlcoholic")}
                  >
                    <span>Alkoholfria drinkar</span>
                    {openCategories.includes("nonAlcoholic") ? <FaAngleDown className="ml-2" /> : ""}
                  </button>
                  {openCategories.includes("nonAlcoholic") && (
                    <ul className="ml-4">
                      <li>
                        <button className="hover:underline" onClick={() => handleCategory("Fresh")}>
                          Fresh
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-4/5 flex flex-wrap">
          {categoryDrinks && categoryDrinks.slice(0, 9).map((drink) => (
            <div key={drink.idDrink} className="w-1/3 px-2 mb-4" onClick={() => navigateCocktailId(drink.idDrink)}>
              <div className="bg-white p-4 shadow-md">
                <p className="text-lg font-semibold">
                  {drink.strDrink} {drink.idDrink}
                </p>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full h-auto mb-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PresentCocktails;
