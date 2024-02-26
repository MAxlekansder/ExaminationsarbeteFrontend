import { useState } from "react";
import { Recipe } from "../types";
import axios from "axios";
import useRecipeState from "../State/indexState";

interface RecipeComponentProps {
  recipeProps: Recipe;
}

const URL = "https://sti-java-grupp2-afmbgd.reky.se/recipes";

const deleteRecipeState = useRecipeState((state) => state.deleteRecipe);
const addRecipeState = useRecipeState((state) => state.addRecipe);

function handleRequests({ recipeProps }: RecipeComponentProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ratings, setRating] = useState(0); // alternative a array 
  const [imageUrl, setImageUrl] = useState("");
  const [timeInMins, setTimeInMins] = useState(0);
  const [categories, setCategories] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);


  // might be a better alternative
  /*
  const [recipe, setRecipe] = useState<Recipe>({
    recipeId: '',
    title: '',
    description: '',
    ratings: [],
    imageUrl: '',
    timeInMins: 0,
    categories: [],
    instructions: [],
    ingredients: [],
  }); */ 

  const handleAddRecipe = async () => {
    try {
      if (!title || !description) return;

      const addResponse = await axios.post(`${URL}`, {
        title: title,
        ratings: ratings,
        description: description,
        imageUrl: imageUrl,
        timeInMins: timeInMins,
        categories: categories,
        instructions: instructions,
        ingredients: ingredients,
      });

      // dont need to check for response as we do try/catch
      addRecipeState(addResponse.data);
      clearForm();

    } catch (error) {
      console.log("Error while adding new recipe to list: ", error);
    }
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setRating("");
    setImageUrl("");
    setTimeInMins(0);
    setCategories([]);
    setInstructions([]);
    setIngredients([]);
  };


  return (
    <div>
      <p>label: </p>
      <input type={title} onChange={(e) => setTitle(e.target.value)} />
    
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
    </div>


  );
}

export default handleRequests;
