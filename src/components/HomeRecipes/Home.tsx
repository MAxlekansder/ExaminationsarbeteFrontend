import React, { useEffect } from "react";
import useRecipeState from "../../State/indexState.tsx";
import { useNavigate } from "react-router-dom";
import NavBarComponent from "../NavBarComponent.tsx";
import { StaticCategories } from "../../data/StaticCategories.ts";

const Home = () => {
  const getRecipe = useRecipeState((state) => state.fetchRecipe);
  const recipe = useRecipeState((state) => state.recipes);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipe();
    console.log("Hej");
  }, [getRecipe]);

  const FilterHandler = (category: string) => {
    return recipe.filter((recipe) => recipe.categories.includes(category));
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
        {FilterHandler("Dinner").map((recipe) => (
          <div
            key={recipe._id}
            onClick={() => navigate(`/home/${recipe._id}`)}
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
                <p className="text-gray-600 text-sm">{recipe.description}</p>
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
        Something <b>sweet</b> while waiting for your clothes?
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
        {FilterHandler("Dessert").map((recipe) => (
          <div
            key={recipe._id}
            onClick={() => navigate(`/home/${recipe._id}`)}
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
                <p className="text-gray-600 text-sm">{recipe.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="border-t mb-10 w-80%" style={{ width: "80%" }}></div>
      </div>
      <h1 className="text-3xl font-bold pl-10">
        Explore our categories
      </h1>
      <div className="grid grid-cols-4 gap-2 p-10">
        {StaticCategories.map((category) => (
          <div
            key={category.name}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-56 object-cover"
              src={category.imageUrl}
              alt={category.name}
              onClick={() => console.log(category.name)}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{category.name}</div>
              <p className="text-gray-700 text-base">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pl-12 pt-2 pb-5">
        ... and so many{" "}
        <b
          className="cursor-pointer hover"
          onClick={() => console.log("Clicked!")}
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
            onClick={() => navigate(`/home/${recipe._id}`)}
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
                <p className="text-gray-600 text-sm">{recipe.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="border-t mb-10 w-80%" style={{ width: "80%" }}></div>
      </div>
    </div>
  );
};
export default Home;
