import {create} from "zustand"
import { Recipe } from "../types"

interface recipeState {
    recipes: Recipe[];
    addRecipe: (newRecipes: Recipe) => void;
    deleteRecipe: (id: string) => void;
}


const useRecipeState = create<recipeState>()((set) => ({

    recipes: [],

    // for updating
    updateRecipes: (recipeId: String) => set,

    // for deleting
    deleteRecipe: (id: string) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.recipeId !== id), // Filter skapar en ny array som inte innehåller den todo med id som vi har i parametern.
    })),
    
    // create a todoRecipe
    todo: String,

    // add a recipe 
    addRecipe: (newRecipes: Recipe) => set((state) =>({
        recipes: [...state.recipes, newRecipes],
    })),

}));

export default useRecipeState;