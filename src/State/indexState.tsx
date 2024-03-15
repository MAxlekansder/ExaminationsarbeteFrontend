// Alexander & Gustav
//La till fetchRecipe här och flyttade ut koden från App.tsx

import {create} from "zustand"
import { Recipe } from "../data/Recipes"
import axios from "axios";

interface recipeState {
    recipes: Recipe[];
    drinks: any[];
    nonDrinks: any[];
    allDrinks: any[];
    detailedDrink: any[];
    addRecipe: (newRecipes: Recipe) => void;
    deleteRecipe: (id: string) => void;
    getApiKey: () => string;
    fetchRecipe: () => void;
    fetchAlcoholicDrinks: () => Promise<void>;
    fetchNonAlcoholicDrinks: () => Promise<void>;
    fetchAllDrinks: () => Promise<void>;
    fetchSpecificDrink: (id: string) => Promise<void>;
    updateRecipes: (recipeId: String, updatedProperties: Partial<Recipe>) => void;
}


const useRecipeState = create<recipeState>()((set) => ({
    
    recipes: [],
    drinks: [],
    nonDrinks: [],
    allDrinks: [],
    detailedDrink: [],

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

   

    fetchRecipe: async () => { // for fetching 
        try {
            const response = await axios.get("https://sti-java-grupp2-afmbgd.reky.se/recipes");
            
            if (response.status === 200) {
                set({ recipes: response.data });
                console.log(response.data);
            } else { console.log("Response error while fetching recipes: ", response.status) }

        } catch (error) {console.log('Error fetching api/data', error);}
    },


    fetchAlcoholicDrinks: async () => { // for fetching alcoholic drinks
        try {
            const drinkResponse = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
            
            if (drinkResponse.status === 200) {
                const drinksData = await drinkResponse.data.drinks;
                set ({ drinks: drinksData });
                console.log(drinksData);
            } else { console.log("Response error while fetcinh alcoholic: ", drinkResponse.status) }
           
        } catch (error) { console.log("error while fetching drinks ", error) }
    },

    fetchNonAlcoholicDrinks: async () => { // for fetching non-alcoholic drinks
        try {
            const nonDrinkResponse = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink");
            
            if (nonDrinkResponse.status === 200) {
                const nonDrinksData = await nonDrinkResponse.data.drinks; 
                set({ nonDrinks: nonDrinksData }); 
                console.log(nonDrinksData);
            } else { console.log("Response error while fetching non alcoholic: ", nonDrinkResponse.status) }
            
        } catch (error) {
            console.log("error while fetching non alcoholic drinks", error);
        }
    },

    fetchAllDrinks: async () => {
        try {
            const drinkResponse = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
            const nonDrinkResponse = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink");
            
            if (drinkResponse.status === 200 && nonDrinkResponse.status === 200) {
                const nonDrinksData =  nonDrinkResponse.data.drinks; 
                const drinksData =  drinkResponse.data.drinks;
    
                const newAllDrinks = [...nonDrinksData, ...drinksData]
                
                set({allDrinks: newAllDrinks})
                console.log(newAllDrinks)
            } else {console.log ("Response error, while fetching all drinks: ", nonDrinkResponse.status, drinkResponse.status)}
           

        } catch (error) { console.log("error while fetching all drinks", error) }
      
    },


    fetchSpecificDrink: async (id: string) => {
        try {
            const detailedDrink = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
            
            if ( detailedDrink.status === 200) {
                const detailedDrinkData = detailedDrink.data.drinks;
                set ({detailedDrink: detailedDrinkData})
                console.log(detailedDrinkData)
            } else { console.log ("Response error: ", detailedDrink.status)}
 
        } catch (error) {console.log("error while fetching specific drink", error)}
    }

}));

 
export default useRecipeState;