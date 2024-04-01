// Alexander

import { useParams, useNavigate } from "react-router-dom";
import useRecipeState from "../../State/indexState";
import { useEffect, useState } from "react";
import NavBarComponent from "../NavBarComponent";

function HomeCategory() {
  const getRecipes = useRecipeState((state) => state.fetchRecipe);
  const recipes = useRecipeState((state) => state.recipes);
  const { urlCategory } = useParams();
  const [category, setCategory] = useState(urlCategory || "all categories");

  const navigate = useNavigate();

  const filterRecipe = () => {
    if (category === "all categories") {
      console.log("hej, i homeCategoy", recipes);
      return recipes;
    } else {
      return recipes.filter((recipe) =>
        recipe.categories.includes(category || "")
      );
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const categoryHandler = (inputCategory: string) => {
    setCategory(inputCategory);
  };

  return (
    <div>
      <NavBarComponent />
      <div>
        <div>
          <div>{category}</div>
        </div>
        <div className="flex">
          <div className="w-1/6">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul>
              <li
                className={`cursor-pointer ${
                  category === "all categories" ? "font-bold" : ""
                }`}
                onClick={() => categoryHandler("all categories")}
              >
                All Categories
              </li>
              <li
                className={`cursor-pointer ${
                  category === "Dessert" ? "font-bold" : ""
                }`}
                onClick={() => categoryHandler("Dessert")}
              >
                Dessert
              </li>
            </ul>
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
                  <p>
                    {recipe.categories.join(" ")}
                  </p>
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
