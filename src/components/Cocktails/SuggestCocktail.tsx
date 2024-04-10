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
                case detailedRecipe.categories.includes('Meat')||
                detailedRecipe.categories.includes('Japanese')||
                detailedRecipe.categories.includes('Spanish'):
                
                  await getCategoryDrink('Red wine');
                  break;
    
                case detailedRecipe.categories.includes('Vegetarian')||
                      detailedRecipe.categories.includes('Mexican'):
    
                  await getCategoryDrink('Tequila');
                  break;
    
                case detailedRecipe.categories.includes('Fish'):
                  await getCategoryDrink('Champagne');
                  break;
    
                case detailedRecipe.categories.includes('Poultry')||
                      detailedRecipe.categories.includes('Thai'):
    
                  await getCategoryDrink('Rum');
                  break;
    
                case detailedRecipe.categories.includes('Italian')|| 
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
            <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
              <h2>Recommended drink to this Dish:</h2>
              <p>{selectedDrink.strDrink}</p>
              <Link to={`/cocktails/${selectedDrink.idDrink}`}>
              <img src={selectedDrink.strDrinkThumb} alt={selectedDrink.strDrink} className='w-80 h-80' />
              </Link>
            </div>
          )}
        </>
      );
    };

export default SuggestCocktail
