// Alexander

import React, {useState} from "react";
import useRecipeState from "../../State/indexState";

interface CocktailSidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  fetchAlcoholicDrinks: () => void;
  fetchNonAlcoholicDrinks: () => void;
}

function CocktailSidebarComponent ()  {
  
  const {fetchAlcoholicDrinks, fetchNonAlcoholicDrinks} = useRecipeState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  
    
  const handleCategorySelect = async (category: string) => {
    setSelectedCategory(category);
    setLoading(true);

    if (category === "Alcoholic") {
      await fetchAlcoholicDrinks();
    } else if (category === "Non-alcoholic") {
      await fetchNonAlcoholicDrinks(); 
    }
    setLoading(false);
  };

  
  
  return (
      <div>
        hej

        lägger till mer här för att se om det fungerar

        hej
      </div>
  );
};

export default CocktailSidebarComponent;
