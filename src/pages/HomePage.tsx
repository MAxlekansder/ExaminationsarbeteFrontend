import DishComponent from '../components/DishComponent';
import { Link } from 'react-router-dom';
import useRecipeState from '../State/indexState';
import { useEffect, useState } from 'react';


function HomePage() {
  const {recipes} = useRecipeState();
  const [randomLunch, setRandomLunch] = useState<any[]>([]);
  const [randomDinner, setRandomDinner] = useState<any[]>([]);
  


  useEffect(() => {
    
    if (recipes.length > 0) {
      const randomIndexes = getRandomIndexes(recipes.length, 3);
      const selectedRecipes = randomIndexes.map(index => recipes[index]);
      
      setRandomLunch(selectedRecipes);
    }
    if (recipes.length > 0) {
      const randomIndexes = getRandomIndexes(recipes.length, 3);
      const selectedRecipes = randomIndexes.map(index => recipes[index]);
     
      setRandomDinner(selectedRecipes);
    }
  }, [recipes]);

  // Funktion för att generera slumpmässiga rätter
  const getRandomIndexes = (max: number, count: number) => {
    const indexes: number[] = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  };

 
  
  
  return (
    <div>

       <div className='testa-laga-text bg-green-200 m-20 mt-0 mb-0'>
      <h1 className='text-center m-5 text-4xl p-12'>
        Lunch tips
        </h1>
      </div>
    <div className='flex justify-center'>
    <div className='bg-green-700 ml-10 mr-10 text-green-700'>.
    </div>
      {randomLunch.map((dish, index) => (
          <Link to={`/dishes/${dish._id}`} key={index}>
            <DishComponent
              key={index}
              id={dish._id}
              name={dish.title}
              image={dish.imageUrl}
              description={dish.description}
              onClick={() => console.log('hej')}
             />
          </Link>
        ))}
    <div className='bg-green-700 ml-10 mr-10 text-green-700'>.</div>
      </div>
         <div className='flex'>
           <p className='text m-20 pl-10 pr-10 italic '>
             Vill du ge din lunch en uppfriskande twist? 
             Testa dagens lunchtips och upptäck nya smaker som kommer att förgylla din dag!   
             Vår samling av läckra recept är noggrant utvalda för att erbjuda dig 
             både smakrik variation och enkelhet i vardagen.
           </p>
         </div>

    <div className='testa-laga-text bg-green-700 m-20 mt-0 mb-0'>
      <h1 className='text-center m-5 text-4xl p-12'>Middags tips!</h1>
      </div>
    <div className='flex justify-center'>
    <div className='bg-green-200 ml-10 mr-10 text-green-200'>.
    </div>
      {randomDinner.map((dish, index) => (
          <Link to={`/dishes/${dish._id}`} key={index}>
            <DishComponent
              key={index}
              id={dish._id}
              name={dish.title}
              image={dish.imageUrl}
              
              description={dish.description}
              onClick={() => console.log(dish.recipe)}
             
            />
          </Link>
          ))}
    <div className='bg-green-200 ml-10 mr-10 text-green-200'>.</div>
         </div>
         <div className='flex'>
           <p className='text m-20 pl-10 pr-10 italic '>
            Är du redo att krydda upp din kvällsmåltid? Utforska dagens middagstips och låt dig 
            inspireras av en värld av fantastiska smaker och enkelhet på tallriken! 
            Vår samling av välsmakande recept är noga utvalda för att erbjuda dig en spännande resa till nya kulinariska höjder.
            </p>
         </div>
      </div>
    
  );
}
export default HomePage;