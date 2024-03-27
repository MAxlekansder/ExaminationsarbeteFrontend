// Alexander

import React, { useEffect, useState } from "react";
import { Recipe, Ingredient } from "../../../data/Recipes";
import useRecipeState from "../../../State/indexState";
import CategorySelected from "../CategorySelect";

interface ModalProps {
  recipe: Recipe;
  imageUrl: string;
  isOpen: boolean;
  recipeId: string;
  onCancel: () => void;
}

function Modal({ recipe, recipeId, imageUrl, isOpen, onCancel }: ModalProps) {
  const fetchSpecificRecipeId = useRecipeState(
    (state) => state.fetchSpecificDrink
  );

  // const [updateRecipe, setUpdateRecipe] = useState<Partial<Recipe>>({});
  const getUpdate = useRecipeState((state) => state.updateRecipes);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newTimeInMins, setNewTimeInMins] = useState(0);
  const [newCategories, setNewCategories] = useState<string[]>(recipe.categories || []);
  const [newInstructions, setNewInstructions] = useState<string[]>(recipe.instructions || []);
  const [newIngredients, setNewIngredients] = useState<Ingredient[]>(recipe.ingredients || []);


  useEffect(() => {
    const handleKeyEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onCancel();
      }
    };


    document.addEventListener("keydown", handleKeyEvent);


    return () => document.removeEventListener("keydown", handleKeyEvent);
  }, [isOpen, onCancel]);


  const handleIngredientUpdate = (index: number, field: string, value: string) => {
    const updateIngredients = [...newIngredients];
    updateIngredients[index] = {...updateIngredients[index], [field]: value}
  }


  const handleInstructionUpdate = (index: number, value: string) => {
    const updateInstructions = [...newInstructions];
    updateInstructions[index] = value ;
    setNewInstructions(updateInstructions)
  }


  const handleRecipeUpdate = () => {
    const updatedRecipe: Recipe = {
      ...recipe,
      title: newTitle !== "" ? newTitle : recipe.title,
      description: newDescription !== "" ? newDescription : recipe.description,
      imageUrl: newImageUrl !== "" ? newImageUrl : recipe.imageUrl,
    };

    console.log(newDescription);
    getUpdate(recipe._id, updatedRecipe);
    console.log(updatedRecipe);
  };


  const handleRemoveIngredient = (index: number, ingredient: Ingredient) => {};

  const handleRemoveInstruction = (index: number, instruction: string) => {

  const addNewIngredient = () => {

  }

  const addNewInstruction = () => {
    
  }


  }

  if (!isOpen) return null;


  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full max-h-screen">
          <div className="flex justify-between">
            <div className="py-4 px-6 w-1/2">
              <input
                id="title"
                type="text"
                placeholder={recipe.title}
                onChange={(e) => setNewTitle(e.target.value)} // if updated, else fall back to the last value
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
              <input
                id="Description"
                type="text"
                placeholder={recipe.description}
                onChange={(e) => setNewDescription(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
              <input
                id="imageUrl"
                type="text"
                placeholder="Paste new URL here"
                onChange={(e) => setNewImageUrl(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
             
              {/* <CategorySelected
                selectedCategories={newCategories}
                onChange={setNewCategories}
              /> */}
              <br />
              <input
                id="time-in-mins"
                type="number"
                placeholder={recipe.timeInMins.toString()}
                value={newTimeInMins == 0 ? "" : newTimeInMins}
                onChange={(e) =>
                  setNewTimeInMins(
                    e.target.value === "" ? 0 : Number(e.target.value)
                  )
                }
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="py-2 px-2 w-1/2 w-500 h-350">
              <img
                src={newImageUrl || imageUrl}
                alt="Preview"
                style={{ width: '500px', height: '350px', objectFit: 'cover' }}
                className="py-3 px-4"
              />
            </div>
          </div>
          <div className="flex py-4 px-6">
            <div className="w-1/2">
              <div>INGREDIENTS</div>
              {recipe.ingredients?.map(
                (ingredient: Ingredient, index: number) => (
                  <li key={index} className="flex">
                    <input
                      id="ingredientName"
                      type="text"
                      placeholder={ingredient.name}
                      onChange={(e) => handleIngredientUpdate(index ,"name", e.target.value)}
                      className="appearance-none block w-1/4 bg-gray-200 text-gray-700 border py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                    <input
                      id="ingredientAmount"
                      type="text"
                      placeholder={ingredient.amount.toString()}
                      onChange={(e) => handleIngredientUpdate(index, "amount", e.target.value)}
                      className="appearance-none block w-1/4 bg-gray-200 text-gray-700 border py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                    <input
                      id="ingredientUnit"
                      type="text"
                      placeholder={ingredient.unit}
                      onChange={(e) => handleIngredientUpdate(index, "Unit", e.target.value)}
                      className="appearance-none block w-1/4 bg-gray-200 text-gray-700 border py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                    <button
                      onClick={() => handleRemoveIngredient(index, ingredient)}
                      className= " w-1/5 bg-red-400 hover:bg-red-500 text-white font-bold py-0 px-2 border border-red-500 rounded h-8 w-15 text-xs"
                    >
                      Ta bort
                    </button>
                  </li>
                )
              )}
            </div>
            <div className="w-1/2">
            <div>INSTRUCTIONS</div>
              {recipe.instructions?.map(
                ( instruction: string, index: number) => (
                  <li key={index} className="flex">
                    <input
                      id="ingredientUnit"
                      type="text"
                      placeholder={instruction}
                      onChange={(e) => handleInstructionUpdate(index ,e.target.value)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                     <button
                      onClick={() => handleRemoveInstruction(index, instruction)}
                      className= " w-1/5 bg-red-400 hover:bg-red-500 text-white font-bold py-0 px-2 border border-red-500 rounded h-8 w-15 text-xs"
                    >
                      Ta bort
                    </button>
                  </li>
                ))}
            </div>
            
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleRecipeUpdate}
              >
                OK
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-400 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onCancel}
              >
                STÄNG
              </button>
              <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-200 text-base font-medium text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                ADD NEW INSTRUCTION 
              </button>
              <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-200 text-base font-medium text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                ADD NEW INGREDIENT 
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
