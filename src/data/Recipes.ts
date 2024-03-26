
export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
 _id: string;
}

export interface Recipe {
  _id: string;
  title: string;
  description: string;
  ratings?: number[]; 
  imageUrl: string;
  timeInMins: number;
  categories?: string[];
  instructions?: string[];
  ingredients?: Ingredient[];
}

