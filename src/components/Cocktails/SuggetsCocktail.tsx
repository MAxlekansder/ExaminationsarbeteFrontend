//Gustav


/*import { useEffect, useState } from 'react'
import useRecipeState from '../../State/indexState'

function SuggetsCocktail(detailedRecipe) {
    const fetchAllDrinks = useRecipeState((state) => state.fetchAllDrinks)
    const allDrinks = useRecipeState((state) => state.allDrinks);
    const [randomCocktail, setRandomCocktail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

   

    useEffect(()=>{
        fetchAllDrinks();

    }, [fetchAllDrinks])

    useEffect(() => {
        const getRandomCocktail = () => {
            
            if(allDrinks.length > 0) {
              const randomIndex = Math.floor(Math.random() * allDrinks.length)
              const generatedCocktail = allDrinks[randomIndex];

              switch(true){
                case detailedRecipe.includes('Meat'):
                    setRandomCocktail(generatedCocktail.includes('Gin'));
                case detailedRecipe.categories.includes('Fish'):
                    setRandomCocktail(generatedCocktail.includes('Vodka'))
                case detailedRecipe.includes('Vegitarian'):
                    setRandomCocktail(generatedCocktail.str)       
        
            }
              
          
      
              
              setIsLoading(false);
            }
            
          }
          getRandomCocktail();
      
      }, [allDrinks]);

      useEffect(() =>{

      })

  return (
    <div>
        <h1>A Cocktail we suggest to this dish is</h1>
            {isLoading ? (
                <p>Loading...</p>
                    ) : randomCocktail ? (
                    <div>
                <h2>{randomCocktail.strDrink {randomCocktail.strIn}h2>
            <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
        </div>
            ) : null}
    </div>
  )
}

export default SuggetsCocktail*/
