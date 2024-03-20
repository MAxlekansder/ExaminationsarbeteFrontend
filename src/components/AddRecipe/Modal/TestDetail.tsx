// Alexander

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRecipeState from "../../../State/indexState";
import { Recipe } from "../../../data/Recipes";
import Modal from "./Modal";


function DetailedTestComponent() {
  const { id } = useParams<{ id: string }>(); 
  const fetchSpecificRecipe = useRecipeState((state) => state.fetchSpecificRecipe);
  const detailedRecipe = useRecipeState((state) => state.detailedRecipe as Recipe)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isModalOpen, setIsModalOpe] = useState(false);
  const [selectRecipeId, setselectedRecipeId] = useState("");

  
  useEffect(() => {
    if (id) {
        fetchSpecificRecipe(id); 
        console.log(id);
    }
  }, [fetchSpecificRecipe, id]);

  const openModal = (recipeId: string) => {
    setselectedRecipeId(recipeId);
    setIsModalOpe(true);
  };


  const closeModal = () => {
    setIsModalOpe(false);
  };

  return (
    <div>
        <h1>hej</h1>
        <button onClick={() => openModal(detailedRecipe._id)} className="border  px-2">
            Ändra receptet</button>
        <Modal
          recipeId={selectRecipeId}
          isOpen={isModalOpen}
          onCancel={closeModal}
          imageUrl={detailedRecipe.imageUrl}
          recipe={detailedRecipe}
          />
        <div>
            {detailedRecipe._id}
            <img src={detailedRecipe.imageUrl} alt="" />
        </div>
      
    </div>
  )
}

export default DetailedTestComponent;