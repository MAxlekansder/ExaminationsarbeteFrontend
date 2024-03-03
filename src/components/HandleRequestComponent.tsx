import { useState } from "react";
import { Recipe } from "../types";
import axios from "axios";
import useRecipeState from "../State/indexState";
// import HandleImageComponent from "./HandleImageComponent";


interface RecipeComponentProps {
  recipeProps?: Recipe;
}


function HandleRequests({ recipeProps }: RecipeComponentProps) {
  const deleteRecipeState = useRecipeState((state) => state.deleteRecipe);
  const addRecipeState = useRecipeState((state) => state.addRecipe);
  const getApiKey = useRecipeState((state) => state.getApiKey);
  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ratings, setRating] = useState(0); // alternative a array,  no need for now
  // const [imageURL, setImageURL] = useState<{file: File | null; url: string}[]>([]);
  const [imageURL, setImageURL] = useState("");
  const [timeInMins, setTimeInMins] = useState(0);
  const [categories, setCategories] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);


  // const URL = "https://sti-java-grupp2-afmbgd.reky.se/recipes";

  const addRecipe = async () => { // title nor desc can't be empty
    try {
      if (!title || !description) {
        alert("You need to add a title and description")
        return;
      }
       
      const apiKey = getApiKey();

      const addResponse = await axios.post(`${apiKey}`, { // for posting with apiKey
        title: title,
        ratings: ratings,
        description: description,
        // imageURL: imageURL?.map(({ file, url}) => ({ file: file ,url: url})),
        imageURL: imageURL,
        timeInMins: timeInMins,
        categories: categories,
        instructions: instructions,
        ingredients: ingredients,
      });


      addRecipeState(addResponse.data); // dont need to check for response as we do try/catch
      
      console.log(addResponse.data) // for logging while developing

      {/* 
    
      const checkIfValueIsParsed: string | undefined = (recipeProps?.recipeId !== null && recipeProps?.recipeId !== "") ? recipeProps?.recipeId : "not returning"; // sick oneliner
      
      console.log(checkIfValueIsParsed) // for testing ID, whole oneliner will do nothing when in done product
    
    */}
      clearForm();

    } catch (error) {
      console.log("Error while adding new recipe to list: ", error);
    }
  };


  const clearForm = () => { // resets the formula after commiting
    setTitle("");
    setDescription("");
    setRating(0);
    setImageURL("");
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
      {/* <HandleImageComponent setImageURL={setImageURL} />  we're not using this for now*/}
      <p>Add a URL: </p>
      <input type={imageURL} onChange={(e) => setImageURL(e.target.value)} />
      {imageURL && <img src={imageURL} alt = "Image preview"/>}
      <br />
      <button onClick={addRecipe}>Lägg till ditt recept</button>
    </div>

  );
}

export default HandleRequests;
