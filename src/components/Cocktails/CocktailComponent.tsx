import { useEffect, useState } from "react";
import useRecipeState from "../../State/indexState";
import NavBarComponent from "../NavBarComponent";
import { useNavigate } from "react-router-dom";


function PresentCocktails() {
  const [selectedCategory, setSelectedCategory] = useState("Alcoholic");
  const getDrinks = useRecipeState((state) => state.fetchAllDrinks);
  const drinks = useRecipeState((state) => state.allDrinks);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate(); // Hook for navigation


  const shuffleResult = (array: any[]) => { // to generate different results for cocktails and not only the first 9 ( yates sorting alogrithm )
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const randomDrinks = shuffleResult(drinks.slice()).slice(0, 9); // used to take out 9 drinks

  const refreshDrinks = async () => {
    // used with button and delay
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 100));

    try {
      await getDrinks(); // Fetch drinks
    } catch (error) {
      console.error("Error fetching drinks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { // classic useEffect...
    refreshDrinks();
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const navigateCocktailId = (id: string) => { // Navigate to the cocktail ID
    navigate(`/cocktails/${id}`); 
  };

  return (
    <div>
      <NavBarComponent />
      <div className="flex">
        <div className="w-1/5">
          {/* <CocktailSidebarComponent 
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          /> */}
        </div>
        <div className="w-4/5">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={refreshDrinks}
            disabled={loading}
          >
            Refresh
          </button>
          <p
            className={`text-xl font-bold mb-4 ${
              loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"
            }`}
          >
            {" "}
            tänkbara drinkar{" "}
          </p>
          <div
            className={`transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          >
            {loading ? (
              <p className="opacity-0">Loading...</p> // Fade out
            ) : (
              <div className="flex flex-wrap -mx-2">
                {randomDrinks.map((drink) => (
                  <div key={drink.idDrink} className="w-1/3 px-2 mb-4" onClick={() => navigateCocktailId(drink.idDrink)}>
                    <div className="bg-white p-4 shadow-md">
                      <p className="text-lg font-semibold">
                        {drink.strDrink} {drink.idDrink}
                      </p>
                      <img
                        src={drink.strDrinkThumb}
                        alt={drink.strDrink}
                        className="w-full h-auto mb-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresentCocktails;
