// Alexander

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeState from "../../State/indexState";
import NavBarComponent from "../NavBarComponent";
import DrinkSidebarMenu from "./DrinksSidebar";
import { StaticLetters, Letter } from "../../data/StaticLetters";
import { StaticCategoriesDrinks } from "../../data/StaticCategoriesDrinks";

function DrinkCategory() {
  const getCategoryDrinks = useRecipeState(
    (state) => state.fetchSpecificDrinkIngredient
  );
  const getDrinksByLetter = useRecipeState((state) => state.fetchDrinkByLetter);
  const letterDrinks = useRecipeState((state) => state.letterDrinks);
  const categoryDrinks = useRecipeState((state) => state.categoryDrinks);
  const [handleCategory, setHandleCategory] = useState("Gin"); // Default category
  const [handleLetter, setHandleLetter] = useState<Letter[]>(StaticLetters);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [dropdownMenus, setDropdownMenus] = useState([
    {
      category: "Alcoholic Drinks",
      options: [
        "Gin",
        "Vodka",
        "Tequila",
        "Light rum",
        "Dark rum",
        "Champagne",
        "Whiskey",
      ],
    },
  ]);

  useEffect(() => {
    fetchSpecificCategory(handleCategory); // for handling sidebar
    fetchDrinkByLetter("a"); // for default loading
  }, [handleCategory]);

  const fetchDrinkByLetter = async (letter: string) => { // depending on the 
    try {
      await getDrinksByLetter(letter);
    } catch (error) {
      console.log("error while fetching");
    }
  };

  const fetchSpecificCategory = async (category: string) => {
    try {
      await getCategoryDrinks(category.toLowerCase());
    } catch (error) {
      console.log("Error fetching category drinks:", error);
    }
  };

  const categoryHandler = (inputCategory: string) => {
    setHandleCategory(inputCategory);
    closeSidebar();
  };

  const navigateCocktailId = (id: string) => {
    navigate(`/cocktails/${id}`);
  };


  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <NavBarComponent />
      <div className="grid gap-8 px-10 py-10 md:grid-cols-2 md:items-center md:text-left">
        <div className="">
          <h1 className="text-3xl font-bold">
            Share a drink with friends or enjoy one yourself
          </h1>
          <p>With a wide variety of choices, everything you could imagine</p>
        </div>
        <div className="w-full rounded-lg overflow-hidden">
          <img
            src="https://media.glamourmagazine.co.uk/photos/6138a302236c41e831489e6c/16:9/w_2560%2Cc_limit/gettyimages-972654870_sf.jpg"
            alt=""
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
      <div>
        <div className="mt-4">
          <p className="text-2xl font-bold mb-2 text-center">
            Filter by letter
          </p>
          <div className="flex justify-center gap-1">
            {handleLetter.slice(0, 12).map((letter) => (
              <button
                key={letter.letter}
                onClick={() => fetchDrinkByLetter(letter.letter)}
                className="px-6 py-3 border rounded bg-wite-200 hover:bg-green-300 focus:bg-green-500 focus:outline-none text-sm"
              >
                {letter.letter}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {handleLetter.slice(12).map((letter) => (
              <button
                key={letter.letter}
                onClick={() => fetchDrinkByLetter(letter.letter)}
                className="px-5 py-3 border rounded bg-wite-200 hover:bg-green-300 focus:bg-green-500 focus:outline-none text-sm"
              >
                {letter.letter}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <div className="border-t mb-10 w-80%" style={{ width: "80%" }}></div>
        </div>
      </div>
      <div
        className="flex overflow-auto p-10"
        style={{
          fontFamily: "Quattro Sans, sans-serif",
          overflowX: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {letterDrinks?.map((drink) => (
          <div
            key={drink.idDrink}
            onClick={() => navigate(`/cocktails/${drink.idDrink}`)}
            className="mx-0.5"
          >
            <div className="rounded overflow-hidden shadow-lg h-72">
              <div className="max-w-3xl">
                <div style={{ width: "300px" }}>
                  <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    style={{
                      height: "170px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    className="transition duration-200 hover:scale-110"
                  />
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="flex justify-between">
                  <div className="font-bold text-lg mb-2">
                  {drink.strDrink.split(' ').length >= 3 ? 
                    drink.strDrink.split(' ').slice(0, 2).join(' ').concat("...") : 
                    drink.strDrink}
                    </div>
                  <div>
                    <p className="text-gray-600 text-sm py-1">
                      {drink.strIngredient1.split(' ').length >= 3 ? drink.strIngredient1.split(' ').slice(0,2).join(' ').concat("...") :
                      drink.strIngredient1}
                      </p>
                  </div>
                </div>
                <div className="text-gray-600 text-sm">
                  {drink.strInstructions
                    .split(" ")
                    .slice(0, 8)
                    .join(" ")
                    .concat("...")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-10">
        <div className="border-t mb-10 w-80%" style={{ width: "80%" }}></div>
      </div>
     
      <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pl-10">
        Drink categories</h1>
      <div className="grid grid-cols-1 gap-4 w-full p-10 md:grid md:grid-cols-4 md:gap-2">
        {StaticCategoriesDrinks.map((category) => (
          <div
            key={category.name}
            className="rounded overflow-hidden shadow-lg md:mb-0  md:w-full"
          >
            <img
              className="w-full h-72 object-cover"
              src={category.imageUrl}
              alt={category.name}
              onClick={() => console.log(category.name)}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">{category.name}</div>
              <p className="text-gray-700 text-base">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-1/4">
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2 pt-5">Categories</h3>
          {dropdownMenus.map(({ category, options }) => (
            <DrinkSidebarMenu
              key={category}
              category={category}
              options={options}
              categoryHandler={categoryHandler}
            />
          ))}
        </div>
      </div> */}

      {/* <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {categoryDrinks &&
          categoryDrinks.map((drink) => (
            <div
              key={drink.idDrink}
              className="rounded overflow-hidden shadow-lg cursor-pointer mb-4"
              onClick={() => navigateCocktailId(drink.idDrink)}
            >
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-full h-64 object-cover"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">{drink.strDrink}</div>
                <p className="text-gray-600 text-sm"></p>
              </div>
            </div>
          ))}
      </div> */}
    </div>
  );
}

export default DrinkCategory;
