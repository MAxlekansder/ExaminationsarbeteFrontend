import React, {useEffect, } from 'react'
import { useParams,} from "react-router-dom";
import useRecipeState from "../../State/indexState.tsx";
import {Recipe} from "../../data/Recipes";
import Modal from '../../components/AddRecipe/Modal/Modal.tsx';
import { useState } from 'react';
import NavBarComponent from '../../components/NavBarComponent.tsx';
import RecipeRating from "../../components/SearchRecipe/RecipeRating.tsx";



const RecipeDetails = () => {
    const {id} = useParams<{ id: string }>()
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
        <NavBarComponent  />
        <button onClick={() => openModal(detailedRecipe._id)} className="border  px-2">
              Change Recipe</button>
                <Modal
                  
                  isOpen={isModalOpen}
                  onCancel={closeModal}
                  imageUrl={detailedRecipe.imageUrl}
                  recipe={detailedRecipe}
                />
        <div className="Recipe-link flex flex-col justify-center items-center m-12 ">
            <div className="Recipe flex felx-col items-center relative">
                <h1 className='absolute top-0 2xl:text-2xl'>{detailedRecipe.title}</h1>
                    <img src={detailedRecipe.imageUrl} className="w-96 h-96 object-cover" />
                <div className="m-12">
            <h2 className="2xl:text-2xl font-mono">Instructions step by step</h2>
        {detailedRecipe.instructions?.map((step, index) => (
    <div className="flex items-center mb-2 " key={index}>
<input
    id={`bordered-checkbox-${index}`}
    type="checkbox"
    value=""
    name="bordered-checkbox"
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
        <label
              htmlFor={`bordered-checkbox-${index}`}
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500 "
                >
                {step}
            </label>
          </div>
        ))}
      </div>
    </div>
    <div>
        <h6>Ingredienser</h6>
            {detailedRecipe.ingredients?.map(ingredient => (
                <p>{ingredient.name}</p>
            ))}
            </div>
          <p>{detailedRecipe.ratings}</p>
    </div>
    <button onClick={handleAddToCart} className="bg-green-500 hover:bg-green-700 py-2 px-4 rounded">
                Add to Cart
            </button>
            {id && (
                <RecipeRating rating={5} dishId={id || ""}/>
            )}
    </>
  );
};

export default RecipeDetails