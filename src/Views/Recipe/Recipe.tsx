import { useEffect, } from 'react'
import { useParams, } from "react-router-dom";
import Title from "./Components/Title/Title.tsx";
import useRecipeState from "../../State/indexState.tsx";
import { Recipe } from "../../data/Recipes";
import { LiaBlenderPhoneSolid } from 'react-icons/lia';
import Modal from '../../components/AddRecipe/ModalRecipe/Modal.tsx';
import { useState } from 'react';
import NavBarComponent from '../../components/NavBarComponent.tsx';
import RecipeRating from '../../components/SearchRecipe/RecipeRating.tsx';



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
      <NavBarComponent />
      <Modal

        isOpen={isModalOpen}
        onCancel={closeModal}
        imageUrl={detailedRecipe.imageUrl}
        recipe={detailedRecipe}
      />

      <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1">
            <img src={detailedRecipe.imageUrl} className="w-full max-w-md h-auto object-cover rounded mx-auto" alt="Recipe img" />
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-center lg:text-left">{detailedRecipe.title}</h1>
              <div className="flex justify-center lg:justify-start space-x-2 mt-4">
                <button onClick={handleAddToCart} className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded transition duration-300">
                  Add to Cart
                </button>
                <button onClick={() => openModal(detailedRecipe._id)} className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded transition duration-300">
                  Change Recipe
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold">Instructions</h2>
              <div className="ml-4">
                {detailedRecipe.instructions?.map((step, index) => (
                  <div key={index} className="flex items-center mt-2">
                    <input
                      id={`checkbox-${index}`}
                      type="checkbox"
                      name={`checkbox-${index}`}
                      className="w-4 h-4 text-green-600 rounded"
                    />
                    <label htmlFor={`checkbox-${index}`} className="ml-2 text-sm font-medium">
                      {step}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold">Ingredients</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {detailedRecipe.ingredients?.map((ingredient, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm font-semibold rounded-full">
                    {ingredient.name}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4">{detailedRecipe.ratings}</p>
            {id && (
              <RecipeRating rating={5} dishId={id || ""} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};


export default RecipeDetails