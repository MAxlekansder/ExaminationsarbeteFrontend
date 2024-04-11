//GUSTAV Made this wonderful algorithm
import { useEffect, useState } from "react"
import useRecipeState from "../../State/indexState"
import { Link } from "react-router-dom";
import { Recipe } from "../../data/Recipes";




const SuggestCocktail = ({ detailedRecipe }: { detailedRecipe: Recipe }) => {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const getCategoryDrink = useRecipeState((state) => state.fetchSpecificDrinkIngredient)

  useEffect(() => {
    if (detailedRecipe) {
      algorithmForCocktail(detailedRecipe);
    }
  }, [detailedRecipe]);

  const algorithmForCocktail = async (detailedRecipe: Recipe) => {
    switch (true) {
      case detailedRecipe.categories.includes('Meat') ||
        detailedRecipe.categories.includes('Japanese') ||
        detailedRecipe.categories.includes('Spanish'):

        await getCategoryDrink('Red wine');
        break;

      case detailedRecipe.categories.includes('Vegetarian') ||
        detailedRecipe.categories.includes('Mexican'):

        await getCategoryDrink('Tequila');
        break;

      case detailedRecipe.categories.includes('Fish'):
        await getCategoryDrink('Champagne');
        break;

      case detailedRecipe.categories.includes('Poultry') ||
        detailedRecipe.categories.includes('Thai'):

        await getCategoryDrink('Rum');
        break;

      case detailedRecipe.categories.includes('Italian') ||
        detailedRecipe.categories.includes('Dessert'):

        await getCategoryDrink('Amaretto');
        break;

      case detailedRecipe.categories.includes('Mediterranean'):
        await getCategoryDrink('Scotch');
        break;

      case detailedRecipe.categories.includes('Scandinavian'):
        await getCategoryDrink('Gin');
        break;

      default:
        console.log('Unknown category');
    }


    const fetchedDrinks = useRecipeState.getState().categoryDrinks;
    if (fetchedDrinks && fetchedDrinks.length > 0) {
      const randomIndex = Math.floor(Math.random() * fetchedDrinks.length);
      const randomDrink = fetchedDrinks[randomIndex];

      setSelectedDrink(randomDrink)

      console.log('Drink selected:', randomDrink);

    } else {
      console.log('FEL FEL FEL!!!!');
    }
  };

  return (
    <>
      {selectedDrink && (
        <div className="container mx-auto my-8 max-w-xs bg-orange p-4 text-center ml-4">
          <h2 className="text-xl font-bold mb-4">Recommended drink to this Dish:</h2>
          <p>{selectedDrink.strDrink}</p>
          <Link to={`/cocktails/${selectedDrink.idDrink}`}>
            <img src={selectedDrink.strDrinkThumb} alt={selectedDrink.strDrink} className='mx-auto w-auto max-w-full h-auto' />
          </Link>
        </div>
      )}
    </>
  );
};

export default SuggestCocktail
