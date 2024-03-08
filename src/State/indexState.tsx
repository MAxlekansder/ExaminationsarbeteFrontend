// Alexander & Gustav
//La till fetchRecipe här och flyttade ut koden från App.tsx

import {create} from "zustand"
import { Recipe } from "../data/Recipes"
import axios from "axios";

interface recipeState {
    recipes: Recipe[];
    addRecipe: (newRecipes: Recipe) => void;
    deleteRecipe: (id: string) => void;
    getApiKey: () => string;
    fetchRecipe: () => void;
    
}

const useRecipeState = create<recipeState>()((set) => ({

    recipes: [],

   updateRecipes: (recipeId: String, updatedProperties: Partial<Recipe>) => set((state) => ({  // for updating all or just one prop of the recipe, if nothing gets added -> returns same recipe
        recipes: state.recipes.map((recipe) => recipe.recipeId === recipe.recipeId ? 
        {...recipe, ...updatedProperties} : recipe
        ),
    })),

    
    deleteRecipe: (id: string) =>  set((state) => ({  // for deleting
      recipes: state.recipes.filter((recipe) => recipe.recipeId !== id), // sorting out everything we're not looking for
    })),
    

    addRecipe: (newRecipes: Recipe) => set((state) =>({ // add a recipe, used in handleRequestComp 
        recipes: [...state.recipes, newRecipes],
    })),

    getApiKey: () =>  "https://sti-java-grupp2-afmbgd.reky.se/recipes",  // instead of initilazing API over and over

    fetchRecipe: async () => {
        try {
            const response = await axios.get("https://sti-java-grupp2-afmbgd.reky.se/recipes")

            if(response.status>=200){
                set({recipes: response.data});
                console.log(response.data)
            }
        }
        catch(error){
            console.log('Error fetching api/data', error);
        }
    }

}));

 
export default useRecipeState;