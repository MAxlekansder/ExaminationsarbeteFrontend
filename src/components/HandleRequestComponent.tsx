import { useState } from "react";
import { Recipe, RecipeInterface } from "../types";
import axios from "axios";
import useRecipeState from "../State/indexState";

interface RecipeComponentProps {
  recipeProps: Recipe;
}

const URL = "https://sti-java-grupp2-afmbgd.reky.se/recipes";

const deleteRecipeState = useRecipeState((state) => state.deleteRecipe);
const addRecipeState = useRecipeState((state) => state.addRecipe);

function handleRequests({ recipeProps }: RecipeComponentProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState([]);


  
  const handleAddRecipe = async () => {
    try {
      if (!name || !recipe) return;

      const addResponse = await axios.post(`${URL}`, {
        name: name,
        description: description,
        recipe: recipe,
        listId: "vårtId",
      });

      // dont need to check for response as we do try catch
      addRecipeState(addResponse.data);
    } catch (error) {
      console.log("Error while adding new recipe to list: ", error);
    }
  };



  const handleDeleteRecipe = async () => {
    try {
      const removeRespons = await axios.delete(`${URL}/${recipeProps.recipeId}`);

      deleteRecipeState(recipeProps.recipeId);

    } catch (error) {
      console.log("Nothing to remove: ", error);
    }
  };

  return (
    <div>
      {/* adds name */}
      <input type={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default handleRequests;
