import {create} from "zustand"
import { Recipe } from "../types"

interface recipeState {
    recipes: Recipe[];
    addRecipe: (newRecipes: Recipe) => void;
}


const useRecipeState = create<recipeState>()((set) => ({

    recipes: [],

    // for updating
    updateRecipes: (id: number, name: string) => set,

    // for deleting
    deleteRecipes: (id: number, name: string) => set,

    // create a todoRecipe
    todo: String,

    // add a recipe 
    addRecipe: (newRecipes: Recipe) => set((state) =>({
        recipes: [...state.recipes, newRecipes],
    })),

}));

export default useRecipeState;