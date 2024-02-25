import {create} from "zustand"
import { RecipeInterface } from "../types"

interface recipeState {
    recipes: RecipeInterface[];

}


const useRecipeState = create<recipeState>()((set) => ({

    recipes: [],

    // for updating
    updateRecipes: (id: number, name: string) => set,

    // for deleting
    deleteRecipes: (id: number, name: string) => set,

    //
}));

export default useRecipeState;