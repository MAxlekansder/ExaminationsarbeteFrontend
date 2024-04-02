// // Alexander
// // gonna rebuild the JSX
// not in use anymore

// import { useParams, useNavigate } from "react-router-dom";
// import useRecipeState from "../../State/indexState";
// import { useEffect, useState } from "react";
// import NavBarComponent from "../NavBarComponent";

// function HomeCategory() {
//   const getRecipes = useRecipeState((state) => state.fetchRecipe);
//   const recipes = useRecipeState((state) => state.recipes);
//   const { category } = useParams();
//   const [handleCategory, setHandleCategory] = useState(
//     category || "All categories"
//   );

//   const [showProtein, setShowProtein] = useState(false);
//   const [showNationalities, setShowNationalities] = useState(false);
//   const [showDailyMeal, setShowDailyMeal] = useState(false);

//   const navigate = useNavigate();

//   const filterRecipe = () => {
//     if (handleCategory !== "All categories") {
//       console.log(recipes, handleCategory);
//       return recipes.filter((recipe) =>
//         recipe.categories.includes(handleCategory || "")
//       );
//     } else {
//       console.log(recipes, handleCategory);
//       return recipes;
//     }
//   };

//   useEffect(() => {
//     getRecipes();
//   }, []);

//   const categoryHandler = (inputCategory: string) => {
//     setHandleCategory(inputCategory);
//   };

//   const toggleDropdown = (overhead: string) => {
//     switch (overhead) {
//       case "Nationalities":
//         setShowNationalities(!showNationalities);
//         break;
//       case "Protein":
//         setShowProtein(!showProtein);
//         break;
//       case "DailyMeal":
//         setShowDailyMeal(!showDailyMeal);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div>
//       <NavBarComponent />
//       <div>
//         <div>
//           <div className="text-lg font-bold">{handleCategory}</div>
//         </div>
//         <div className="flex">
//           <div className="w-1/6">
//             <h3 className="text-lg font-bold mb-4 pt-5">Categories</h3>
//             <button
//               className="text-lg mb-4 pt-5"
//               onClick={() => categoryHandler("All categories")}
//             >
//               All Categories
//             </button>
//             <button
//               onClick={() => toggleDropdown("DailyMeal")}
//               className="cursor-pointer w-full py-2 text-left focus:outline-none"
//             >
//               Daily Meal
//             </button>
//             {showDailyMeal && (
//               <ul className=" left-0 mt-1 w-full z-10">
//                 <li
//                   onClick={() => categoryHandler("Breakfast")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Breakfast" ? "font-bold" : ""
//                   }`}
//                 >
//                   Breakfast
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Lunch")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Lunch" ? "font-bold" : ""
//                   }`}
//                 >
//                   Lunch
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Dinner")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Dinner" ? "font-bold" : ""
//                   }`}
//                 >
//                   Dinner
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Snack")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Snack" ? "font-bold" : ""
//                   }`}
//                 >
//                   Snack
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Dessert")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Dessert" ? "font-bold" : ""
//                   }`}
//                 >
//                   Dessert
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Appetizer")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Appetizer" ? "font-bold" : ""
//                   }`}
//                 >
//                   Appetizer
//                 </li>
//               </ul>
//             )}
//             <button
//               onClick={() => toggleDropdown("Protein")}
//               className="cursor-pointer w-full py-2 text-left focus:outline-none"
//             >
//               Protein
//             </button>

//             {showProtein && (
//               <ul className=" left-0 mt-1 w-full z-10">
//                 <li
//                   onClick={() => categoryHandler("Meat")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Meat" ? "font-bold" : ""
//                   }`}
//                 >
//                   Meat
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Poultry")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Poultry" ? "font-bold" : ""
//                   }`}
//                 >
//                   Poultry
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Fish")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Fish" ? "font-bold" : ""
//                   }`}
//                 >
//                   Fish
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Seafood")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Seafood" ? "font-bold" : ""
//                   }`}
//                 >
//                   Seafood
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Candy")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Candy" ? "font-bold" : ""
//                   }`}
//                 >
//                   Candy
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Pork")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Pork" ? "font-bold" : ""
//                   }`}
//                 >
//                   Pork
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Soy")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Soy" ? "font-bold" : ""
//                   }`}
//                 >
//                   Soy
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Tofu")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Tofu" ? "font-bold" : ""
//                   }`}
//                 >
//                   Tofu
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Vegetarian")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Vegetarian" ? "font-bold" : ""
//                   }`}
//                 >
//                   Vegetarian
//                 </li>
//               </ul>
//             )}

//             <button
//               onClick={() => toggleDropdown("Nationalities")}
//               className="cursor-pointer w-full py-2 text-left focus:outline-none"
//             >
//               Nationalities
//             </button>

//             {showNationalities && (
//               <ul className=" left-0 mt-1 w-full z-10">
//                 <li
//                   onClick={() => categoryHandler("Italian")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Italian" ? "font-bold" : ""
//                   }`}
//                 >
//                   Italian
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Chinese")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Chinese" ? "font-bold" : ""
//                   }`}
//                 >
//                   Chinese
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Indian")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Indian" ? "font-bold" : ""
//                   }`}
//                 >
//                   Indian
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Mexican")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Mexican" ? "font-bold" : ""
//                   }`}
//                 >
//                   Mexican
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Japanese")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Japanese" ? "font-bold" : ""
//                   }`}
//                 >
//                   Japanese
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Mediterranean")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Mediterranean" ? "font-bold" : ""
//                   }`}
//                 >
//                   Mediterranean
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Scandinavian")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Scandinavian" ? "font-bold" : ""
//                   }`}
//                 >
//                   Scandinavian
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("American")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "American" ? "font-bold" : ""
//                   }`}
//                 >
//                   American
//                 </li>
//                 <li
//                   onClick={() => categoryHandler("Thai")}
//                   className={`cursor-pointer py-2 px-4 ${
//                     handleCategory === "Thai" ? "font-bold" : ""
//                   }`}
//                 >
//                   Thai
//                 </li>
//               </ul>
//             )}
//           </div>

//           <div className="w-5/6 grid grid-cols-3 gap-4">
//             {filterRecipe().map((recipe) => (
//               <div
//                 key={recipe._id}
//                 className="rounded overflow-hidden shadow-lg"
//               >
//                 <img
//                   src={recipe.imageUrl}
//                   alt=""
//                   className="w-full h-64 object-cover"
//                   onClick={() => navigate(`/recipe/specificRecipe/${recipe._id}`)}
//                 />
//                 <div className="px-6 py-4">
//                   <div className="flex justify-between">
//                     <div className="font-bold text-lg mb-2">{recipe.title}</div>
//                     <p className="text-gray-600 text-sm">
//                       Rating {recipe.avgRating}
//                     </p>
//                   </div>
//                   <p>{recipe.categories.join(" ")}</p>
//                   <p className="text-gray-600 text-sm">
//                     {recipe.description.length > 50
//                       ? `${recipe.description.substring(0, 100)}...`
//                       : recipe.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default HomeCategory;
