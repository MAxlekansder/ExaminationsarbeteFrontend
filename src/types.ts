export interface Ingredient {
    name: string;
    amount: number;
    unit: string;
  }
  
 export interface Recipe {
    recipeId: string;
    title: string;
    description: string;
    ratings?: number; 
    // imageUrl: ({file: File, url: String}[])  let this be for now 
    imageUrl: string;
    timeInMins: number;
    categories: string[];
    instructions: string[];
    ingredients: Ingredient[];
  }

