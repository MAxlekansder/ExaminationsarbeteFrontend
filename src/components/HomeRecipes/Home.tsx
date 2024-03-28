import React, { useEffect } from "react";
import useRecipeState from "../../State/indexState.tsx";
import { useNavigate } from "react-router-dom";
import NavBarComponent from "../NavBarComponent.tsx";

const Home = () => {
  const getRecipe = useRecipeState((state) => state.fetchRecipe);
  const recipe = useRecipeState((state) => state.recipes);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipe();
    console.log("Hej");
  }, [getRecipe]);

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
      <h2 className="pl-10">test</h2>
      <div
        className="flex overflow-auto p-10"
        style={{
          fontFamily: "Quattro Sans, sans-serif",
          overflowX: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {recipe.map((recipe) => (
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
          <h1 className="text-3xl font-bold pl-10">You thought we where kidding?</h1>
          <p className="p-10">best rated on google 5, two years in a row</p>
        </div>
      </div>
      <h2 className="pl-12">test</h2>
      <div
        className="flex overflow-auto p-10"
        style={{
          fontFamily: "Quattro Sans, sans-serif",

          overflowX: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {recipe.map((recipe) => (
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
    </div>
  );
};
export default Home;
