// Alexander

import React from "react";

interface CocktailSidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  fetchAlcoholicDrinks: () => void;
  fetchNonAlcoholicDrinks: () => void;
}

function CocktailSidebarComponent ({selectedCategory,onCategorySelect, fetchAlcoholicDrinks, fetchNonAlcoholicDrinks }: CocktailSidebarProps): JSX.Element  {
 
    return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <div className="category-options">
        <button
          className={selectedCategory === "Alcoholic" ? "selected" : ""}
          onClick={() => {
            onCategorySelect("Alcoholic");
            fetchAlcoholicDrinks(); // Fetch alcoholic drinks when selected
          }}
          
        >
          Alcoholic
        </button>
        <ul className="alcoholic-subcategories">
          <li>Gin</li>
          <li>Vodka</li>
          <li>Rum</li>
          {/* Add more alcoholic subcategories as needed */}
        </ul>
        <button
          className={selectedCategory === "Non-Alcoholic" ? "selected" : ""}
          onClick={() => {onCategorySelect("Non-Alcoholic"), fetchNonAlcoholicDrinks}}
        >
          Non-Alcoholic
        </button>
        <ul className="non-alcoholic-subcategories">
          <li>Mocktails</li>
          <li>Smoothies</li>
          {/* Add more non-alcoholic subcategories as needed */}
        </ul>
      </div>
    </aside>
  );
};

export default CocktailSidebarComponent;
