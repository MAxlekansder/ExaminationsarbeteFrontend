//Gustav & Medi
import DishComponent from '../../components/DishComponent';
import { Link } from 'react-router-dom';
import useRecipeState from '../../State/indexState';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import NavBarComponent from '../../components/NavBarComponent';
import RecipeSearch from '../../components/SearchRecipe/RecipeSearchProps';
import FooterComponent from '../../components/Footer/FooterComponent';
import NavBarTest from '../../components/Test/NavBar';


function HomePage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { recipes, fetchRecipe } = useRecipeState();
  const [randomLunch, setRandomLunch] = useState<any[]>([]);
  const [randomDinner, setRandomDinner] = useState<any[]>([]);
  const [lunchCardRef, scrollPosLunch] = useInView({ triggerOnce: true, });
  const [dinnerCardRef, scrollPosDinner] = useInView({ triggerOnce: true, });

  const lunchRef = useRef(null);
  const dinnerRef = useRef(null);
 


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

      {/**LUNCH TEXT */}
  <div className='xl:flex 2xl:flex lg:flex align-middle justify-center sm:grid sm:grid-flow-row'>
    <div className='grid grid-flow-row sm:flex sm:flex-col max-sm:justify-center max-sm:align-middle'>
      <h1 className='font-bold font-mono w-96 text-2xl mb-1 max-sm:w-80'>
            Do you want to give your lunch a refreshing twist? 
            </h1>
                <p className='font-mono w-96 text-justify max-sm:w-80'>
                  Try today's lunch tips and discover new flavors that will 
                  brighten your day! Our collection of delicious recipes is 
                  carefully selected to offer you both tasty variety and simplicity 
                  in everyday life.
                </p>

          </div>
          <img src="/Images/inteMathem.png" alt="" className='w-96 h-80 ml-10 object-cover xl:block lg:block 2xl:block sm:hidden md:hidden max-sm:hidden rounded-xl' />
      </div>

    {/*LUNCH GRID*/}
  
      <div className='2xl:mt-20 2xl:pt-20 xl:mt-10 xl:pt-10 lg:pt-0 lg:mt-0'ref={lunchCardRef}>
        <h1 className='text-center font-semibold  m-5 2xl:text-5xl p-12 font-mono md:text-3xl sm:text-2xl'>
          Todays Lunch Suggestions!
          </h1>
            </div>
        <div className='xl:flex 2xl:flex lg:flex align-middle justify-center mr-10 ml-10 max-sm:grid sm:grid-flow-row'ref={lunchRef}>
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
      </div>
      <div className='mt-10'></div>
    {/**DINNER TEXT*/}
    <div className='xl:flex 2xl:flex lg:flex  align-middle justify-center  sm:grid sm:grid-flow-row'>
    <img src="/Images/inteMathem.png" alt="" className='w-96 h-80 mr-10 object-cover xl:block lg:block 2xl:block sm:hidden md:hidden max-sm:hidden rounded-xl' />
      <div className='grid grid-flow-row sm:flex sm:flex-col max-sm:justify-center max-sm:align-middle'>
      <h1 className='font-bold font-mono w-96 text-2xl mb-1 max-sm:w-80 '>
            Do you want to give your lunch a refreshing twist? 
            </h1>
                <p className='font-mono w-96 text-justify max-sm:w-80'>
                  Try today's lunch tips and discover new flavors that will 
                  brighten your day! Our collection of delicious recipes is 
                  carefully selected to offer you both tasty variety and simplicity 
                  in everyday life.
                </p>
              
          </div>
          
      </div>
 

         {/*DINNER GRID*/}
         <div className='2xl:mt-20 2xl:pt-20 xl:mt-10 xl:pt-10 lg:pt-0 lg:mt-0'ref={dinnerCardRef}>
        <h1 className='text-center font-semibold m-5 2xl:text-5xl p-12 font-mono md:text-3xl sm:text-2xl'>
          Todays Dinner Suggestions!
          </h1>
            </div>
        <div className='xl:flex 2xl:flex lg:flex align-middle justify-center mr-10 ml-10  max-sm:grid sm:grid-flow-row'ref={dinnerRef}>
        {randomDinner.map((dish, index) => (
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
      </div>
      <div className='mt-10'></div>
      </>

  );
}

export default HomePage;
