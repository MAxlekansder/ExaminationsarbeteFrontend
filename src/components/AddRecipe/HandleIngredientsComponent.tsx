import React, { useState } from "react";
import { Ingredient } from "../../data/Recipes";

interface IngredientsListProps {
  ingredient: Ingredient[];
  setIngredient: React.Dispatch<React.SetStateAction<Ingredient[]>>;
}

const typesOfMeasure = ["gram", "kg", "tsk", "msk", "dl", "l", "krm", "st"];

function IngredientsList({ ingredient, setIngredient,}: IngredientsListProps): JSX.Element {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectedMeasure, setSelectedMeasure] = useState(typesOfMeasure[0]);

  const handleAddIngredients = () => {
    try {
      if (name.trim() === "" || isNaN(amount)) {
        alert("You need to enter the name, amount and unit of measure");
        return;
      }

      const addIngredients: Ingredient = {
        name: name,
        amount: amount,
        unit: selectedMeasure,
      };

      setIngredient([...ingredient, addIngredients]);
    } catch (error) {
      console.log("error while adding ingredients: ", error);
    }
  };

  return (
    <div>
      <p>Namn: </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Mängd: </p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <p>Enhet: </p>
      <select
        value={selectedMeasure}
        onChange={(e) => setSelectedMeasure(e.target.value)}
      >
        {typesOfMeasure.map((measure) => (
          <option key={measure} value={measure}>
            {measure}
          </option>
        ))}
      </select>

      <button onClick={handleAddIngredients}>Add Ingredient</button>
    </div>
  );
}

export default IngredientsList;
