import React, { useState } from "react";
import Recipe from "../Views/Recipe/Recipe";
import { Ingredient } from "../data/Recipes";

interface IngredientsListProps {
   ingredientProps: Ingredient
}

function ingredientsList({ ingredientProps }: IngredientsListProps) {
   const [name, setName] = useState("");
   const [amount, setAmount] = useState(0)
   const [unit, setUnit] = useState("");

    const handleAddIngredients = () => {

    }

}

export default ingredientsList;