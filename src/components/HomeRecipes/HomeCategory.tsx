// Alexander

import { useParams, useNavigate } from "react-router-dom";
import useRecipeState from "../../State/indexState";
import { useEffect, useState } from "react";
import NavBarComponent from "../NavBarComponent";

function HomeCategory() {
  const getRecipes = useRecipeState((state) => state.fetchRecipe);
  const recipes = useRecipeState((state) => state.recipes);
  const { category } = useParams();
  const [handleCategory, setHandleCategory] = useState(category || "All categories");
//   const [mainCategory, setMainCategory] = useState({ Nationalities: true, Protein: true, DailyMeals: true});
  const [mainCategory, setMainCategory] = useState(true);

  const navigate = useNavigate();

  const filterRecipe = () => {
    if (handleCategory !== "All categories") {
      console.log(recipes, handleCategory);
      return recipes.filter((recipe) => recipe.categories.includes(handleCategory || ""));
    } else {
      console.log(recipes, handleCategory);
      return recipes;
    }
  };


  useEffect(() => {
    getRecipes();
  }, []);

  const categoryHandler = (inputCategory: string) => {
    setHandleCategory(inputCategory)
  };

  const toggleDropdown = () => {
    setMainCategory(!mainCategory)
  }


  return (
    <div>
      <NavBarComponent />
      <div>
        <div>
          <div className="text-lg font-bold">{handleCategory}</div>
        </div>
        <div className="flex">
          <div className="w-1/6">
            <h3 className="text-lg font-bold mb-4 pt-5">Categories</h3>
            <button
            onClick={toggleDropdown}
            className="cursor-pointer w-full py-2 text-left focus:outline-none"
          >
            Nationalities
          </button>

          {mainCategory && (
            <ul className=" left-0 mt-1 w-full z-10">
              <li
                onClick={() => categoryHandler("Italian")}
                className={`cursor-pointer py-2 px-4 ${
                  category === "Italian" ? "font-bold" : ""
                }`}
              >
                Italian
              </li>
              <li
                onClick={() => categoryHandler("Dessert")}
                className={`cursor-pointer py-2 px-4 ${
                  category === "Dessert" ? "font-bold" : ""
                }`}
              >
                Dessert
              </li>
              <li
                onClick={() => categoryHandler("Dinner")}
                className={`cursor-pointer py-2 px-4 ${
                  category === "Dinner" ? "font-bold" : ""
                }`}
              >
                Dinner
              </li>
            </ul>
          )}
          </div>

          <div className="w-5/6 grid grid-cols-3 gap-4">
            {filterRecipe().map((recipe) => (
              <div
                key={recipe._id}
                className="rounded overflow-hidden shadow-lg"
              >
                <img
                  src={recipe.imageUrl}
                  alt=""
                  className="w-full h-64 object-cover"
                  onClick={() => navigate(`/home/specificRecipe/${recipe._id}`)}
                />
                <div className="px-6 py-4">
                  <div className="flex justify-between">
                    <div className="font-bold text-lg mb-2">{recipe.title}</div>
                    <p className="text-gray-600 text-sm">
                      Rating {recipe.avgRating}
                    </p>
                  </div>
                  <p>{recipe.categories.join(" ")}</p>
                  <p className="text-gray-600 text-sm">
                    {recipe.description.length > 50
                      ? `${recipe.description.substring(0, 100)}...`
                      : recipe.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeCategory;

// <ul>
// <li
//   className={`cursor-pointer ${
//     category === "All categories" ? "font-bold" : ""
//   }`}
//   onClick={() => categoryHandler("All categories")}
// >
//   All Categories
// </li>
// <li
//   className={`cursor-pointer ${
//     category === "Dessert" ? "font-bold" : ""
//   }`}
//   onClick={() => categoryHandler("Dessert")}
// >
//   Dessert
// </li>
// <li
//   className={`cursor-pointer ${
//     category === "Dessert" ? "font-bold" : ""
//   }`}
//   onClick={() => categoryHandler("Dinner")}
// >
//   Dinner
// </li>
// </ul>