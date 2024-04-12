// Gustav & Kristian & Alexander

import { useEffect, } from 'react'
import { Link, useParams, } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import useRecipeState from "../../State/indexState.tsx";
import { Recipe } from "../../data/Recipes";
import { LiaBlenderPhoneSolid } from 'react-icons/lia';
import Modal from '../../components/AddRecipe/RecipeModal.tsx';
import { useState } from 'react';
import RecipeRating from '../../components/SearchRecipe/RecipeRating.tsx';
import NavBarComponent from '../../components/NavBarComponent.tsx';
import SuggestCocktail from '../../components/Cocktails/SuggestCocktail.tsx';



const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>()
  const getRecipe = useRecipeState((state) => state.fetchSpecificRecipe)
  const detailedRecipe = useRecipeState((state) => state.detailedRecipe as Recipe)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isModalOpen, setIsModalOpe] = useState(false);
  const [selectRecipeId, setselectedRecipeId] = useState("");





  useEffect(() => {
    if (id) {
      getRecipe(id);
      console.log(id);
    }
  }, [getRecipe, id]);

  const openModal = (recipeId: string) => {
    setselectedRecipeId(recipeId);
    setIsModalOpe(true);
  };

  const closeModal = () => {
    setIsModalOpe(false);
  };

  const handleAddToCart = () => {
    console.log('Recipe added to cart:', detailedRecipe);
    useRecipeState.getState().addToCart(detailedRecipe);
    console.log('Updated cart:', useRecipeState.getState().cart);
  };

return (
    <>
   
      <Modal

        isOpen={isModalOpen}
        onCancel={closeModal}
        imageUrl={detailedRecipe.imageUrl}
        recipe={detailedRecipe}
      />

      <div className="container mx-auto my-8 p-6 bg-orange-50 shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div>
            <div className="flex justify-between items-baseline mr-4">
              <h1 className="text-4xl font-bold">{detailedRecipe.title}</h1>
              <div className="flex items-center">
                <MdOutlineTimer className='text-3xl' />
                <span className='text-lg ml-2'>{detailedRecipe.timeInMins} min</span>
              </div>
              <span className='font-semibold text-lg'>{detailedRecipe.price} kr</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-lg font-semibold ml-2">{detailedRecipe.avgRating}</span>
              <IoIosStar className="text-yellow-400 text-2xl ml-1" />
              <span className="ml-2 text-lg">Rating</span>
            </div>
            <p className="mt-4">{detailedRecipe.description}</p>
            <div className="flex space-x-2 mt-4">
              <button onClick={handleAddToCart} className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded transition duration-300">
                Add to Cart
              </button>
              <button onClick={() => openModal(detailedRecipe._id)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition duration-300">
                Change Recipe
              </button>
            </div>
          </div>
          <div>
            <img src={detailedRecipe.imageUrl} className="w-full h-auto object-cover rounded" alt="Recipe" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div>
            <h2 className="text-2xl font-bold">Ingredients</h2>
            <ul className="list-disc list-inside mt-2">
              {detailedRecipe.ingredients?.map((ingredient, index) => (
                <li key={index} className="mt-2 flex items-start p-2 bg-gray-50 border border-gray-200 rounded-md">
                  <span className="font-semibold">
                    {ingredient.amount} {ingredient.unit}
                  </span>
                  <span className='ml-2'>{ingredient.name}</span>
                </li>
              ))}
            </ul>
          </div>


          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Method</h2>
            <div className="space-y-2">
              {detailedRecipe.instructions?.map((step, index) => (
                <div key={index} className="flex items-start p-3 bg-gray-50 border border-gray-200 rounded-md">
                  <input
                    id={`checkbox-${index}`}
                    type="checkbox"
                    name={`checkbox-${index}`}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor={`checkbox-${index}`} className="ml-3 text-md font-medium text-gray-700">
                    {step}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4">{detailedRecipe.ratings}</p>
        {id && (
          <RecipeRating rating={5} dishId={id || ""} />
        )}
      </div >
      <SuggestCocktail detailedRecipe={detailedRecipe}/>
    </>
  );
};


export default RecipeDetails
