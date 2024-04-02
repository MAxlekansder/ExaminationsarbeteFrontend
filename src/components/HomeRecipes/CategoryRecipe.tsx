//Alexander och Sertan

import React, { useEffect } from "react";
import useRecipeState from "../../State/indexState.tsx";
import { useNavigate } from "react-router-dom";
import NavBarComponent from "../NavBarComponent.tsx";
import { StaticCategories } from "../../data/StaticCategories.ts";
import FooterComponent from "../Footer/FooterComponent.tsx";

function RecipeHome() {
  const getRecipe = useRecipeState((state) => state.fetchRecipe);
  const recipe = useRecipeState((state) => state.recipes);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipe();
    console.log("Hej");
  }, []);

  const FilterHandler = (category: string) => {
    const firstFilterRecipe = recipe.filter((recipe) =>
      recipe.categories.includes(category)
    );
    const randomRecipes = firstFilterRecipe.sort(() => Math.random() - 0.5);
    return randomRecipes;
  };

  const locateHandler = (category: string) => {
    navigate(`/recipe/category/${category}`);
  };

  return (
    <div>
      <NavBarComponent />
      <div className="flex items-center pb-2 py-10 px-20">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">
            Explore our fantastic recipes and excellent design
          </h1>
          <p>the home of the best recipes and dry cleaning</p>
        </div>
        <div className="w-1/2 ml-4">
          <img
            src="https://images.cdn.prd.api.discomax.com/2023/09/30/cbf6070c-53af-3219-9f4b-42005e408406.jpeg?f=jpg&q=75&w=1280&w=1200"
            alt=""
            className="rounded-lg max-h-50"
          />
        </div>
      </div>
      <h2 className="text-xl pl-20">
        Something spicy for <b>dinner</b>?
      </h2>
      <div
        className="flex overflow-auto p-10"
        style={{
          fontFamily: "Quattro Sans, sans-serif",
          overflowX: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {FilterHandler("Dinner")
          .slice(0, 9)
          .map((recipe) => (
            <div
              key={recipe._id}
              onClick={() => navigate(`/recipe/specificRecipe/${recipe._id}`)}
              className="mx-0.5 "
            >
              <div className="rounded overflow-hidden shadow-lg h-80">
                <div className="max-w-3xl">
                  <div style={{ width: "280px" }}>
                    <img
                      src={recipe.imageUrl}
                      alt=""
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
                  <div className="font-bold text-lg mb-2">{recipe.title}</div>
                  <p className="text-gray-600 text-sm">
                    {recipe.description.length > 50
                      ? `${recipe.description.substring(0, 100)}...`
                      : recipe.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-evenly pb-2 py-10 px-20">
        <div className="w-1/2 ml-4">
          <img
            src="https://www.universaldrycleaningsolutions.com.au/wp-content/uploads/Best-commercial-Dry-cleaning-Machine-Brands.jpg"
            alt=""
            className="rounded-lg max-h-50"
          />
        </div>
        <div className="w-1/2 ml-4">
          <h2 className="text-3xl font-bold pl-10">
            You thought we where kidding?
          </h2>
          <p className="pl-10">best rated on google 5, two years in a row</p>
        </div>
      </div>
      <h2 className="text-xl pl-20 pt-10 ">
        Something <b onClick={() => locateHandler("Dessert")}>sweet</b> while waiting for your clothes?
      </h2>
      <div
        className="flex overflow-auto p-10"
        style={{
          fontFamily: "Quattro Sans, sans-serif",

          overflowX: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {FilterHandler("Dessert")
          .slice(0, 9)
          .map((recipe) => (
            <div
              key={recipe._id}
              onClick={() => navigate(`/recipe/specificRecipe/${recipe._id}`)}
              className="mx-0.5"
            >
              <div className="rounded overflow-hidden shadow-lg h-80">
                <div className="max-w-3xl">
                  <div style={{ width: "280px" }}>
                    <img
                      src={recipe.imageUrl}
                      alt=""
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
                  <div className="font-bold text-lg mb-2">{recipe.title}</div>
                  <p className="text-gray-600 text-sm">
                    {recipe.description.length > 100
                      ? `${recipe.description.substring(0, 50)}...`
                      : recipe.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <div className="border-t mb-10 w-80%" style={{ width: "80%" }}></div>
      </div>
      <h1 className="text-3xl font-bold pl-10">Explore our categories</h1>
      <div className="grid grid-cols-4 gap-2 p-10">
        {StaticCategories.map((category) => (
          <div
            key={category.name}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-64 object-cover"
              src={category.imageUrl}
              alt={category.name}
              onClick={() => locateHandler(category.name)}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">{category.name}</div>
              <p className="text-gray-700 text-base">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pl-12 pt-2 pb-5">
        ... and so many{" "}
        <b
          className="cursor-pointer hover"
          onClick={() => locateHandler("All categories")}
        >
          more
        </b>
      </div>
      <div className="flex justify-center">
        <div className="border-t mb-10 w-80%" style={{ width: "80%" }}></div>
      </div>
      <h2 className="text-xl pl-12">
        <b>Vegetarian</b> dishes - a more green choice!
      </h2>
      <div
        className="flex overflow-auto p-10"
        style={{
          fontFamily: "Quattro Sans, sans-serif",

          overflowX: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {FilterHandler("Vegetarian").map((recipe) => (
          <div
            key={recipe._id}
            onClick={() => navigate(`/recipe/specificRecipe/${recipe._id}`)}
            className="mx-0.5"
          >
            <div className="rounded overflow-hidden shadow-lg h-80">
              <div className="max-w-3xl">
                <div style={{ width: "280px" }}>
                  <img
                    src={recipe.imageUrl}
                    alt=""
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
                <div className="font-bold text-lg mb-2">{recipe.title}</div>
                <p className="text-gray-600 text-sm">
                  {recipe.description.length > 10
                    ? `${recipe.description.substring(0, 100)}...`
                    : recipe.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="border-t mb-10 w-80%" style={{ width: "80%" }}></div>
      </div>
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Inspire with your own recipe
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Feel like you can do it better? Add yours!
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="">
                        <div className="h-100 md:h-96 lg:h-120 w-full md:w-1/2 lg:w-full overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://www.wnyfamilymagazine.com/downloads/6195/download/Family%20Dinner%20Tips.jpg?cb=ec94adbc30dfdac90e11c6f2d62e45ee"
                            alt="Larger Image"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="/add/"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Add your own recipe!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
};
export default RecipeHome;
