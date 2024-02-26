import React from "react";
import axios from "axios";
import useRecipeState from "../State/indexState";

interface DeleteRecipeProps {
  recipeId: string;
}

const URL = "https://sti-java-grupp2-afmbgd.reky.se/recipes";

const deleteRecipeState = useRecipeState((state) => state.deleteRecipe);


const deleteRecipeComponent = ({ recipeId }: DeleteRecipeProps ) => {

    const handleDeleteRecipe = async () => {
        try {
          await axios.delete(`${URL}/${recipeId}`); // we can add const response = if we want to log status
          deleteRecipeState(recipeId);
        } catch (error) {
          console.log("Error while deleting recipe: ", error);
        }
      };
    
      return (
        <div>

          <button onClick={handleDeleteRecipe}>Delete Recipe</button> // if we want it to be a button, we can change this however we like
        </div>
      );
};
   

export default deleteRecipeComponent;