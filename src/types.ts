export interface Ingredient {
    name: string;
    amount: number;
    unit: string;
  }
  
 export interface Recipe {
    recipeId: string;
    title: string;
    description: string;
    ratings?: number[]; // Ratings is now an optional array of numbers
    imageUrl: string;
    timeInMins: number;
    categories: string[];
    instructions: string[];
    ingredients: Ingredient[];
  }

