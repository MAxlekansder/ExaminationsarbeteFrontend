import DishComponent from '../components/DishComponent';
import { Link } from 'react-router-dom';
import useRecipeState from '../State/indexState';
import { useEffect, useState } from 'react';

function HomePage() {
  const { recipes } = useRecipeState();
  const [randomLunch, setRandomLunch] = useState<any[]>([]);
  const [randomDinner, setRandomDinner] = useState<any[]>([]);

  useEffect(() => {
    if (recipes.length > 0) {
      const lunchRecipes = recipes.filter(recipe => recipe.categories.includes('Lunch'));
      const dinnerRecipes = recipes.filter(recipe => recipe.categories.includes('Dinner'));

      
      const randomIndexesLunch = getRandomIndexes(lunchRecipes.length, 3);
      const randomIndexesDinner = getRandomIndexes(dinnerRecipes.length, 3);

      const selectedRecipesLunch = randomIndexesLunch.map(index => lunchRecipes[index]);
      const selectedRecipesDinner = randomIndexesDinner.map(index => dinnerRecipes[index]);

      setRandomLunch(selectedRecipesLunch);
      setRandomDinner(selectedRecipesDinner);
    }
  }, [recipes]);

  //För att generera 3 random rätter
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
      {/* Lunch section */}
      <div className='testa-laga-text bg-green-200 m-20 mt-0 mb-0'>
        <h1 className='text-center m-5 text-4xl p-12'>Todays Lunch Suggestions!</h1>
      </div>
      <div className='flex justify-center'>
      <div className='bg-green-700 ml-10 mr-10 text-green-700'>.</div>
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
          Do you want to give your lunch a refreshing twist? Try today's lunch tips and discover new flavors that will brighten your day! Our collection of delicious recipes is carefully selected to offer you both tasty variety and simplicity in everyday life.
        </p>
      </div>

      
      <div className='testa-laga-text bg-green-700 m-20 mt-0 mb-0'>
        <h1 className='text-center m-5 text-4xl p-12'>Todays Dinner Suggestions!</h1>
      </div>
      
      <div className='flex justify-center'>
      <div className='bg-green-200 ml-10 mr-10 text-green-200'>.</div>
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
        Are you ready to spice up your evening meal? Explore today's dinner tips and be inspired by a world of great flavors and simplicity on the plate! Our collection of tasty recipes are carefully selected to offer you an exciting journey to new culinary heights.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
