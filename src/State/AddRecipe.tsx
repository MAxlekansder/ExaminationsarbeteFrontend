import { useState } from "react";
import { RecipeInterface } from "../types";
import axios from "axios";
import useRecipeState from "./indexState";

const globalState = useRecipeState
const URL = "setnågotbrahär";

function handleRequests() {
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
        listId: "vårtId"
      });

      // dont need to check for response as we do try catch 
      addResponse.data

    } catch (error) {
      console.log("Error while adding new recipe to list: ", error);
    }
  };

  return (
    <div>
        {/* adds name */}
        <input type={name} onChange={(e) => setName(e.target.value)}/>
    </div>

  )
}

export default handleRequests();
