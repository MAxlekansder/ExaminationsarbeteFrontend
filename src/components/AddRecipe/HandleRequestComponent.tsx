  // Alexander

  import { useState } from "react";
  import { Recipe, Ingredient } from "../../data/Recipes";
  import axios from "axios";
  import useRecipeState from "../../State/indexState";
  import CategorySelected from "./CategorySelectComponent";
  import InstructionList from "./HandleInstructionsComponent";
  import IngredientsList from "./HandleIngredientsComponent";
  import NavBarComponent from "../NavBarComponent";
  import '../../Styling/Dishes.css'




  interface RecipeComponentProps {
    recipeProps: Recipe;
  }

  function HandleRequests() {

    const addRecipeState = useRecipeState((state) => state.addRecipe);
    const getApiKey = useRecipeState((state) => state.getApiKey);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ratings, setRating] = useState(0); // alternative a array,  no need for now
    
    // const [imageURL, setImageURL] = useState<{file: File | null; url: string}[]>([]);  let this be for now
    const [imageUrl, setImageUrl] = useState("");
    const [timeInMins, setTimeInMins] = useState(0);
    const [categories, setCategories] = useState<string[]>([]);
    const [instructions, setInstructions] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);


    const addRecipe = async () => {
      // title, desc nor url can't be empty
      try {

        if (!title || !description || !imageUrl) { // maybe create a modal here instead
          alert("You need to add a Title, Description and a image Url");

          return;
        }

        const apiKey = getApiKey();

        const addResponse = await axios.post(`${apiKey}`, {
          // for posting with apiKey
          title: title,
          ratings: ratings,
          description: description,
          // imageURL: imageURL?.map(({ file, url}) => ({ file: file ,url: url})), let this be for now
          imageUrl: imageUrl,
          timeInMins: timeInMins,
          categories: categories,
          instructions: instructions,
          ingredients: ingredients,

          
        });
        console.log(imageUrl);
        addRecipeState(addResponse.data); // dont need to check for response as we do try/catch

        console.log(addResponse.data); // for logging while developing
        clearForm();
      } catch (error) {
        console.log("Error while adding new recipe to list: ", error);
      }
    };

    const clearForm = () => {
      // resets the formula after commiting
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
        <div>
          <NavBarComponent />
        </div>
        
        <div className="border border-gray-300 rounded p-6 border-img">
          <div className="flex justify-center items-stretch h-screen">
            <div className="w-full max-w-3xl">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="title-input"
                  >
                    TITLE
                  </label>
                  <input
                    type={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="title-input"
                    placeholder="title"
                  />

                  {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="description"
                  >
                    BESKRIVNING
                  </label>
                  <input
                    type={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="description"
                    placeholder="description"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="time-in-mins"
                  >
                    TID I MIUNTER
                  </label>
                  <input
                    id="time-in-mins"
                    type="number"
                    value={timeInMins == 0 ? "" : timeInMins}
                    onChange={(e) =>
                      setTimeInMins(
                        e.target.value === "" ? 0 : Number(e.target.value)
                      )
                    }
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />

                  {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="category-select"
                  >
                    KATEGORIER
                  </label>
                  <CategorySelected 
                    selectedCategories={categories}
                    onChange={setCategories}
                    
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="url-add"
                  >
                    LÄGG TILL EN URL
                  </label>
                  <input
                    id="url-add"
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="https://..."
                  />
                
                  <p className="text-gray-600 text-xs italic">
                    Se till att bilden existerar
                  </p>
                </div>
              </div>
              <div>
              <IngredientsList ingredient={ingredients} setIngredient={setIngredients} />
   
              </div>
             <div>
              <br />
             <InstructionList instructions={instructions} setInstructions={setInstructions} />
   
             </div>
             <br />
             <button onClick={addRecipe} className="border px-1 py-1">
              Lägg till ditt recept</button>
            </div>
            
          </div>
        </div>
  
      </div>
    );
  }

  export default HandleRequests;
