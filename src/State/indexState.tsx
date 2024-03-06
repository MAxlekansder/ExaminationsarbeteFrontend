// Alexander

import {create} from "zustand"
import { Recipe } from "../data/Recipes"

interface recipeState {
    recipes: Recipe[];
    addRecipe: (newRecipes: Recipe) => void;
    deleteRecipe: (id: string) => void;
    getApiKey: () => string;
    
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


}));

 
export default useRecipeState;