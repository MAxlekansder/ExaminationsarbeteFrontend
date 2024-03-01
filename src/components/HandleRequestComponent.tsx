import { useState } from "react";
import { Recipe } from "../types";
import axios from "axios";
import useRecipeState from "../State/indexState";
import HandleImageComponent from "./HandleImageComponent";


interface RecipeComponentProps {
  recipeProps?: Recipe;
}


function HandleRequests({ recipeProps }: RecipeComponentProps) {
  const deleteRecipeState = useRecipeState((state) => state.deleteRecipe);
  const addRecipeState = useRecipeState((state) => state.addRecipe);
  const apiKey = useRecipeState((state) => state.getApiKey);
  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ratings, setRating] = useState(0); // alternative a array,  no need for now
  const [imageUrl, setImageUrl] = useState("");
  const [timeInMins, setTimeInMins] = useState(0);
  const [categories, setCategories] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);


  const addRecipe = async () => { // title nor desc can't be empty
    try {
      if (!title || !description) {
        alert("You need to add a title and description")
        return;
      }
       

      const addResponse = await axios.post(`${apiKey}`, { // for posting with apiKey
        title: title,
        ratings: ratings,
        description: description,
        imageUrl: imageUrl,
        timeInMins: timeInMins,
        categories: categories,
        instructions: instructions,
        ingredients: ingredients,
      });


      addRecipeState(addResponse.data); // dont need to check for response as we do try/catch
   
      const checkIfValueIsParsed: string | undefined = (recipeProps?.recipeId !== null && recipeProps?.recipeId !== "") ? recipeProps?.recipeId : "not returning"; // sick oneliner
      
      console.log(checkIfValueIsParsed) // for testing ID, whole oneliner will do nothing when in done product
      clearForm();

    } catch (error) {
      console.log("Error while adding new recipe to list: ", error);
    }
  };


  const clearForm = () => { // resets the formula after commiting
    setTitle("");
    setDescription("");
    setRating(0);
    setImageUrl("");
    setTimeInMins(0);
    setCategories([]);
    setInstructions([]);
    setIngredients([]);
  };


  return (
    <div>
      <p>Title: </p>
      <input type={title} onChange={(e) => setTitle(e.target.value)} />
      <p>Description: </p>
      <input type={description} onChange={(e) => setDescription(e.target.value)} />
      <p>rating: </p>
      <div>
        {[1,2,3,4,5].map((value) => (
          <label key={value}>
            <input 
            type="radio" 
            name="rating"
            value={value}
            checked = {ratings === value}
            onChange={() => setRating(value)}
            />
            {value}
          </label>
        ))}
      </div>
      <HandleImageComponent setImageURL={setImageUrl} />
      <button onClick={addRecipe}>Lägg till ditt recept</button>
    </div>

  );
}

export default HandleRequests;
