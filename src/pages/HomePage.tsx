//Gustav & Medi
import DishComponent from '../components/DishComponent';
import { Link } from 'react-router-dom';
import useRecipeState from '../State/indexState';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import NavBarComponent from '../components/NavBarComponent';
import RecipeSearch from '../components/SearchRecipe/RecipeSearchProps';
import FooterComponent from '../components/Footer/FooterComponent';


function HomePage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { recipes, fetchRecipe } = useRecipeState();
  const [randomLunch, setRandomLunch] = useState<any[]>([]);
  const [randomDinner, setRandomDinner] = useState<any[]>([]);
  const [lunchCardRef, scrollPosLunch] = useInView({ triggerOnce: true, });
  const [dinnerCardRef, scrollPosDinner] = useInView({ triggerOnce: true, });

  const lunchRef = useRef(null);
  const dinnerRef = useRef(null);
  const navigateToDish = useNavigate();


  useEffect(() => {
    fetchRecipe();

  }, []);


  useEffect(() => {
    if (recipes.length > 0) {
      const lunchRecipes = recipes.filter(recipe => recipe.categories.includes('Lunch'));
      const dinnerRecipes = recipes.filter(recipe => recipe.categories.includes('Dinner'));

      const randomIndexesLunch = getRandomIndexes(lunchRecipes.length, 4);
      const randomIndexesDinner = getRandomIndexes(dinnerRecipes.length, 4);

      const selectedRecipesLunch = randomIndexesLunch.map(index => lunchRecipes[index]);
      const selectedRecipesDinner = randomIndexesDinner.map(index => dinnerRecipes[index]);

      setRandomLunch(selectedRecipesLunch);
      setRandomDinner(selectedRecipesDinner);
    }
  }, [recipes]);

  useEffect(() => {
    if (scrollPosLunch) {
      lunchRef.current.classList.add('card-fade-in')

    }
    if (scrollPosDinner) {
      dinnerRef.current.classList.add('card-fade-in')

    }
  }, [scrollPosLunch, scrollPosDinner])


  //För att generera random rätter
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

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      <div>
        <NavBarComponent />
        <div className="food-header">
          <h1 className='welcome-text-header text-center font-bold text-7xl text-white opacity-90'>
            Welcome to Not-Mathem!
          </h1>
        </div>
        <div className="m-5 flex justify-center">
          <RecipeSearch
            recipesFromInterface={recipes}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        </div>
      </div>
      <div className='flex w-2/5 xl:ml-10- md:ml-40 lg:ml-40 relative mt-20 mb-20 sm:ml-40'>
        <div className='pr-10 xl:pl-60'>
          <h1 className='2xl:text-4xl font-mono absolute top-0 2xl:w-96 font-semibold md:text-3xl sm:text-xl sm:w-80 '>
            Do you want to give your lunch a refreshing twist?
          </h1>
          <p className='2xl:text-2xl 2xl:w-96 mt-20 xl:pt-20 md:text-xl sm:text-xm sm:w-80  '>
            Try today's lunch tips and discover new flavors that will
            brighten your day! Our collection of delicious recipes is
            carefully selected to offer you both tasty variety and simplicity
            in everyday life.
          </p>
        </div>
        <div className='bg-green-700 xl:ml-10 xl:mr-10 text-green-700'>.</div>
        <div className=''>
          <img src="/Images/inteMathem.png" alt="" className='absolute object-cover first-mainpage-img xl:block sm:hidden' />
        </div>
      </div>
      <div className='p-10'>
        <div className='2xl:mt-20 2xl:pt-20 xl:mt-10 xl:pt-10' ref={lunchCardRef}>
          <h1 className='text-center font-semibold  m-5 2xl:text-5xl p-12 font-mono md:text-3xl sm:text-2xl'>
            Todays Lunch Suggestions!
          </h1>
        </div>
        <div className='xl:flex xl:justify-center md:flex max-[600]:felx-col' ref={lunchRef}>
          <div className='bg-green-700 xl:ml-10 xl:mr-10 text-green-700 sm:mb-10'>.</div>
          {randomLunch.map((dish, index) => (
            <Link to={`/recipe/${dish._id}`} key={index}>
              <DishComponent
                key={index}
                id={dish._id}
                name={dish.title}
                image={dish.imageUrl}
                description={dish.description}
              />
            </Link>
          ))}
          <div className='bg-green-700 xl:ml-10 xl:mr-10 text-green-700'>.</div>
        </div>
        <div className='p-20'></div>{/*För att göra sidan lite luftig*/}

        <div className='flex justify-end sm:mr-40'>
          <div className='bg-green-200 xl:ml-10 xl:mr-10 text-green-200'>.</div>
          <div className='relative w-2/5 mt-20 mb-20 mr-40'>
            <div className=''>
              <img src="/Images/inteMathem.png"
                alt="" className='absolute object-cover secound-mainpage-img xl:block sm:hidden' />
            </div>
            <div className='pl-10 '>
              <h1 className='2xl:text-4xl font-mono absolute top-0 font-semibold md:text-3xl sm:text-xl sm:w-80 '>
                Are you ready to spice up your evening meal?
              </h1>
              <p className='2xl:text-2xl mt-20 xl:pt-20 md:text-xl sm:text-xm sm:w-80 '>
                Explore today's dinner tips and be inspired by a world of
                great flavors and simplicity on the plate! Our collection of
                tasty recipes are carefully selected to offer you an exciting journey
                to new culinary heights.
              </p>
            </div>
          </div>
        </div>
        <div className='2xl:mt-20 2xl:pt-20 xl:mt-10 xl:pt-10'>
          <h1 className='text-center font-semibold  m-5 2xl:text-5xl p-12 font-mono md:text-3xl sm:text-2xl' ref={dinnerCardRef}>
            Todays Dinner Suggestions!
          </h1>
        </div>
        <div className='xl:flex justify-center md:flex max-[600]:felx-col' ref={dinnerRef}>
          <div className='bg-green-200 xl:ml-10 xl:mr-10 text-green-200 sm:mb-10'>.</div>
          {randomDinner.map((dish, index) => (
            <Link to={`/recipe/specificRecipe/${dish._id}`} key={index}>
              <DishComponent
                key={index}
                id={dish._id}
                name={dish.title}
                image={dish.imageUrl}
                description={dish.description}

              />
            </Link>
          ))}
          <div className='bg-green-200 xl:ml-10 xl:mr-10 text-green-200'>.</div>
        </div>
      </div>
      <div className='mt-20 p-10'>
      </div>
      <FooterComponent />
    </>

  );
}

export default HomePage;
