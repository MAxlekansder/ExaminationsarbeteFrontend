// Alexander & Gustav
//La till fetchRecipe här och flyttade ut koden från App.tsx

import {create} from "zustand"
import { Recipe } from "../data/Recipes"
import axios from "axios";



interface recipeState {
    recipes: Recipe[];
    drinks: any[];
    addRecipe: (newRecipes: Recipe) => void;
    deleteRecipe: (id: string) => void;
    getApiKey: () => string;
    fetchRecipe: () => void;
    fetchDrinks: () => Promise<void>;
    updateRecipes: (recipeId: String, updatedProperties: Partial<Recipe>) => void;
}


const useRecipeState = create<recipeState>()((set) => ({
    recipes: [],
    drinks: [],

    getApiKey: () =>  "https://sti-java-grupp2-afmbgd.reky.se/recipes",  // instead of initilazing API over and over


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

   

    fetchRecipe: async () => {
        try {
            const response = await axios.get("https://sti-java-grupp2-afmbgd.reky.se/recipes");
            set({ recipes: response.data });
            console.log(response.data);
        } catch (error) {
            console.log('Error fetching api/data', error);
        }
    },


    fetchDrinks: async () => {
        try {
            const drinkResponse = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
            const drinksData = await drinkResponse.data.drinks;
            set ({ drinks: drinksData });
            console.log(drinksData);
        } catch (error) { console.log("error while fetching drinks ", error) }
    } 

}));

 
export default useRecipeState;