// Alexander

import React, { useEffect, useState } from "react";
import { Recipe, Ingredient } from "../../../data/Recipes";
import useRecipeState from "../../../State/indexState";

interface ModalProps {
  recipe: Recipe;
  imageUrl: string;
  isOpen: boolean;
  recipeId: string;
  onCancel: () => void;
}

function Modal({ recipe, recipeId, imageUrl, isOpen, onCancel }: ModalProps) {
  const fetchSpecificRecipeId = useRecipeState((state) => state.fetchSpecificDrink)
  const [test, setTest] = useState("");
  
  
  useEffect(() => {
    const handleKeyEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleKeyEvent);

    return () => document.removeEventListener("keydown", handleKeyEvent);
  }, [isOpen, onCancel]);



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

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full max-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
       
            <div className="py-4 px-6 col-span-3 sm:col-span-2">
            <input
                    id="time-in-mins"
                    type={test}
                    placeholder={recipe.title}
                    onChange={(e) => setTest(e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
              {/* {recipe._id}
              {recipe.description} */}
              <input
                    id="time-in-mins"
                    type={test}
                    placeholder={recipe.description}
                    onChange={(e) => setTest(e.target.value)}
                    
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
              {recipe.ingredients?.map((ingredient: Ingredient, index: number) => (
                <li key={index}>{ingredient.name} {ingredient.amount}</li>
              ))}
            </div>

            
            <div className="py-2 px-2">
              <img src={imageUrl} alt="Preview" className="max-w-full h-auto" />
            </div>

       
            <div className="py-4 px-6 col-span-3 sm:col-span-2">
              test test test 2
            </div>
          </div>

          {/* Buttons */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
  <button
    type="button"
    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
    onClick={onCancel}
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
</div>

        </div>
      </div>
    </div>
  );
}

export default Modal;
