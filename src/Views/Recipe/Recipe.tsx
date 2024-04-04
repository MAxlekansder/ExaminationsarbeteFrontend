import {useEffect, } from 'react'
import { useParams,} from "react-router-dom";
import Title from "./Components/Title/Title.tsx";
import useRecipeState from "../../State/indexState.tsx";
import {Recipe} from "../../data/Recipes";
import { LiaBlenderPhoneSolid } from 'react-icons/lia';
import AddToCart from '../../components/Cart/addToCart.tsx';
import Modal from '../../components/AddRecipe/Modal/Modal.tsx';
import { useState } from 'react';
import FooterComponent from '../../components/Footer/FooterComponent.tsx';


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


    return (
        <>
        <button onClick={() => openModal(detailedRecipe._id)} className="border  px-2">
              Change Recipe</button>
                <Modal
                  
                  isOpen={isModalOpen}
                  onCancel={closeModal}
                  imageUrl={detailedRecipe.imageUrl}
                  recipe={detailedRecipe}
                />
        <div className="
              2xl:Recipe-link 2xl:flex 2xl:flex-col
              xl:Recipe-link xl:flex xl:flex-col
              lg:Recipe-link lg:flex lgflex-col
              md:Recipe-link md:flex md:flex-col
              sm:Recipe-link sm:flex sm:flex-col  
              justify-center items-center m-12 
              ">
            <div className="
              2xl:Recipe 2xl:flex 
              xl:flex xlm:flex-row-reverse 
              lg:flex lg:flex-row-reverse 
              md:flex md:flex-row-reverse 
              sm:flex 
              felx-col items-center relative 
            
            ">
                <h1 className='absolute top-0  xl:text-xl'>{detailedRecipe.title}</h1>
                    <img src={detailedRecipe.imageUrl} className="2xl:w-96 2xl:h-96 object-cover" />
                <div className="m-12">
            <h2 className="xl:text-xl font-mono">Instructions step by step</h2>
        {detailedRecipe.instructions?.map((step, index) => (
    <div className="
                  2xl:flex 2xl:items-center 2xl:mb-2
                  xl:flex xl:items-center xl:mb-2
                  lg:flex lg:items-center lg:mb-2
                  md:flex md:items-center md:mb-2
                  sm:flex sm:items-center sm:mb-2
                    " key={index}>
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
        <h2 className='2xl:text-3xl xl:text-3xl sm:text-3xl'>Ingredienser</h2>
            {detailedRecipe.ingredients?.map(ingredient => (
                <p>{ingredient.name}</p>
            ))}
            </div>
          <p>{detailedRecipe.ratings}</p>
          <AddToCart />
          
    </div>
   <div className='mb-52'></div>{/*För att adda lite tom space*/}
   <FooterComponent/>
    
    </>
  );
};

export default RecipeDetails
