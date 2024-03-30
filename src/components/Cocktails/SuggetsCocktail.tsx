//Gustav
import { useEffect, useState } from 'react'
import useRecipeState from '../../State/indexState'

function SuggetsCocktail(){
    const fetchAllDrinks = useRecipeState((state) => state.fetchAllDrinks)
    const allDrinks = useRecipeState((state) => state.allDrinks);
    const [randomCocktail, setRandomCocktail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetchAllDrinks();

    }, [fetchAllDrinks])

    useEffect(() => {
        const getRandomCocktail = () => {
            
            if(allDrinks.length > 0){
              const randomIndex = Math.floor(Math.random() * allDrinks.length)
              const generatedCocktail = allDrinks[randomIndex];
      
              setRandomCocktail(generatedCocktail);
              setIsLoading(false);
            }
          }
          getRandomCocktail();
      
      }, [allDrinks]);

  return (
    <div>
        <h1>A Cocktail we suggest to this dish is</h1>
            {isLoading ? (
                <p>Loading...</p>
                    ) : randomCocktail ? (
                    <div>
                <h2>{randomCocktail.strDrink}</h2>
            <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
        </div>
            ) : null}
    </div>
  )
}

export default SuggetsCocktail
