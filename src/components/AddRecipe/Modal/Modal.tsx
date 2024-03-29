// Alexander

import React, { useEffect, useState } from "react";
import { Recipe, Ingredient } from "../../../data/Recipes";
import useRecipeState from "../../../State/indexState";
import CategorySelected from "../CategorySelect";

interface ModalProps {
  recipe: Recipe;
  imageUrl: string;
  isOpen: boolean;
  onCancel: () => void;
}

function Modal({ recipe, imageUrl, isOpen, onCancel }: ModalProps) {

  const getUpdate = useRecipeState((state) => state.updateRecipes);
  const [updatedRecipe, setUpdatedRecipe] = useState<Recipe>(recipe);
  const [displayNewUrl, setDisplayNewUrl] = useState("");

  useEffect(() => {
    setUpdatedRecipe(recipe)
    const handleKeyEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onCancel();
      }
    };


    document.addEventListener("keydown", handleKeyEvent);

    return () => document.removeEventListener("keydown", handleKeyEvent);
  }, [isOpen, onCancel]);


  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    if (name === "imageUrl") {
      setDisplayNewUrl(value)
    }
    setUpdatedRecipe((updateRecipe) => ({
      ...updateRecipe,
      [name]: value,
      
    }));

   
  };

  const handleIngredientChange = (index: number, property: string, newValue: string) => {
    setUpdatedRecipe(updateRecipe => {
      const updatedIngredients = [...updateRecipe.ingredients || []];
      updatedIngredients[index] = { ...updatedIngredients[index], [property]: newValue };
      return { ...updateRecipe, ingredients: updatedIngredients };
    });
  };


  const handleInstructionChange = (index: number, newValue: string) => {
    setUpdatedRecipe(updateRecipe => {
      const updatedInstructions = [...(updateRecipe.instructions || [])]; // Provide a default empty array if instructions is undefined
      updatedInstructions[index] = newValue;
      return { ...updateRecipe, instructions: updatedInstructions };
    });
  };
  


  const handleRecipeUpdate = () => {
    console.log("handle recipe update",updatedRecipe._id)
    console.log("handle prop", updatedRecipe)
    getUpdate(updatedRecipe._id, updatedRecipe);
  };


  const fixThis = () => {
    console.log("fix this");
  };


  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-scroll">
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

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full max-h-screen modal-content">
          <div className="flex justify-between">
            <div className="py-4 px-6 w-1/2">
              <input
                id="title"
                type="text"
                name="title"
                placeholder={recipe.title}
                // value={updatedRecipe.title}
                onChange={handleUserInput} 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
              <input
                id="Description"
                type="text"
                name="description"
                placeholder={recipe.description}
                onChange={handleUserInput}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
              <input
                id="imageUrl"
                type="text"
                name="imageUrl"
                placeholder="Paste new URL here"
                onChange={handleUserInput}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
              <input
                id="imageUrl"
                type="text"
                name="categories"
                placeholder={recipe.categories.join(" ,")}
                onChange={handleUserInput}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            
              <input
                id="timesInMins"
                type="number"
                name="timeInMins"
                placeholder={recipe.timeInMins.toString()}
                onChange={handleUserInput}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="py-2 px-2 w-1/2 w-500 h-350">
              <img
                src={displayNewUrl || imageUrl}
                alt="Preview"
                style={{ width: "500px", height: "350px", objectFit: "cover" }}
                className="py-3 px-4"
              />
            </div>
          </div>
          <div className="flex py-4 px-6">
            <div className="w-1/2" style={{ overflowY: 'auto', maxHeight: '350px' }}>
              <div>INGREDIENTS</div>
              {recipe.ingredients?.map(
                (ingredient: Ingredient, index: number) => (
                  <li key={index} className="flex">
                    <input
                      id="ingredientName"
                      type="text"
                      placeholder={ingredient.name}
                      onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                      className="appearance-none block w-1/4 bg-gray-200 text-gray-700 border py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                    <input
                      id="ingredientAmount"
                      type="text"
                      placeholder={ ingredient.amount ? ingredient.amount.toString() : ""}
                      onChange={(e) => handleIngredientChange(index, "amount", e.target.value)}
                      className="appearance-none block w-1/4 bg-gray-200 text-gray-700 border py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                    <input
                      id="ingredientUnit"
                      type="text"
                      placeholder={ingredient.unit}
                      onChange={(e) => handleIngredientChange(index, "unit", e.target.value)}
                      className="appearance-none block w-1/4 bg-gray-200 text-gray-700 border py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                    <button
                      onClick={fixThis}
                      className=" w-1/5 bg-red-400 hover:bg-red-500 text-white font-bold py-0 px-2 border border-red-500 rounded h-8 w-15 text-xs"
                    >
                      Ta bort
                    </button>
                  </li>
                )
              )}
              </div>
              <div className="w-1/2" style={{ overflowY: 'auto', maxHeight: '350px' }}>
                <div>INSTRUCTIONS</div>
                {recipe.instructions?.map(
                  (instruction: string, index: number) => (
                    <li key={index} className="flex">
                      <input
                        id="ingredientUnit"
                        type="text"
                        placeholder={instruction}
                        onChange={((e) => handleInstructionChange(index, e.target.value))}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
                      />
                      <button
                        onClick={fixThis}
                        className=" w-1/5 bg-red-400 hover:bg-red-500 text-white font-bold py-0 px-2 border border-red-500 rounded h-8 w-15 text-xs"
                      >
                        Ta bort
                      </button>
                    </li>
                  )
                )}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleRecipeUpdate}
              onKeyDown={handleRecipeUpdate}
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
          </div>
          </div>
     
        </div>
      </div>
  );
}

export default Modal;
