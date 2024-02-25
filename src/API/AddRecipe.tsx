import { useState } from "react";
import { RecipeInterface } from "../types";
import axios from "axios";

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
    } catch (error) {
      console.log("Error while adding new recipe to list: ", error);
    }
  };
}

export default handleRequests();
