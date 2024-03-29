import DishComponent from '../components/DishComponent';
import { Link } from 'react-router-dom';
import useRecipeState from '../State/indexState';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useInView } from 'react-intersection-observer';


function HomePage() {
  const { recipes } = useRecipeState();
  
  const [randomLunch, setRandomLunch] = useState<any[]>([]);
  const [randomDinner, setRandomDinner] = useState<any[]>([]);
  
  const navigateToDish = useNavigate();
  
  const [lunchCardRef, scrollPosLunch] = useInView({triggerOnce:true,});
  const [dinnerCardRef, scrollPosDinner] = useInView({triggerOnce: true,});
  
  const lunchRef = useRef(null);
  const dinnerRef = useRef(null);
  

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

  useEffect(()=>{
    if(scrollPosLunch){
      lunchRef.current.classList.add('card-fade-in')
      
    }
    if(scrollPosDinner){
      dinnerRef.current.classList.add('card-fade-in')
    
    }
    
    
  }, [scrollPosLunch,scrollPosDinner])

  /*useEffect(()=>{
    if(scrollPosDinner){
      dinnerRef.current.classList.add('card-fade-in')
    
    }
  }, [scrollPosDinner])*/

 

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
  <>
  <div className='flex w-2/5  ml-40 relative mt-20 mb-20'>
    <div className='pl-10'>
      <h1 className='2xl:text-4xl font-mono absolute top-0 font-semibold md:text-3xl sm:text-xl'>
          Do you want to give your lunch a refreshing twist? </h1>
          <p className='2xl:text-2xl mt-20 pt-10 md:text-xl sm:text-sm '>
              Try today's lunch tips and discover new flavors that will 
              brighten your day! Our collection of delicious recipes is 
              carefully selected to offer you both tasty variety and simplicity 
              in everyday life.
              </p>
              </div>
                <div className='bg-green-700 2xl:ml-10 2xl:mr-10 text-green-700'>.</div>
            <div className=''>
          <img src="public/Images/inteMathem.png" alt="" className='absolute object-cover first-mainpage-img' />
        </div>
    </div>
  <div className='p-10'>
      <div className='2xl:mt-20 2xl:pt-20 xl:mt-10 xl:pt-10'ref={lunchCardRef}>
        <h1 className='text-center font-semibold  m-5 2xl:text-5xl p-12 font-mono md:text-3xl'>
          Todays Lunch Suggestions!
          </h1>
      </div>
        <div className='flex justify-center'ref={lunchRef}>
      <div className='bg-green-700 ml-10 mr-10 text-green-700'>.</div>
        {randomLunch.map((dish, index) => (
          <Link to={`/dishes/${dish._id}`} key={index}>
            <DishComponent
              key={index}
              id={dish._id}
              name={dish.title}
              image={dish.imageUrl}
              description={dish.description}
              onClick={() => navigateToDish(`/test/${dish._id}`)}
                          />
          </Link>
        ))}
        <div className='bg-green-700 ml-10 mr-10 text-green-700'>.</div>
      </div>

      <div className='p-20'></div>{/*För att göra sidan lite luftig*/}
      
      <div className='flex justify-end'>
      <div className='bg-green-200 mt-10 mb-10 text-green-200'>.</div>
      
        <div className='relative w-2/5 mt-20 mb-20 mr-40'>
           <div className=''>
              <img src="/Images/inteMathem.png" 
                alt="" className='absolute object-cover secound-mainpage-img ' />
            </div> 
        <div className='pl-10 '>
          
        
      <h1 className='2xl:text-4xl font-mono absolute top-0 font-semibold md:text-3xl sm:text-xl '>
          Are you ready to spice up your evening meal? 
          </h1>
            <p className='2xl:text-2xl mt-20 pt-10 md:text-xl sm:text-sm '>
                Explore today's dinner tips and be inspired by a world of 
                great flavors and simplicity on the plate! Our collection of 
                tasty recipes are carefully selected to offer you an exciting journey 
                to new culinary heights.
              </p>
           </div>
        </div>
        
    </div>
  
    <div className='2xl:mt-20 2xl:pt-20 xl:mt-10 xl:pt-10'>
   
        <h1 className='text-center font-semibold  m-5 2xl:text-5xl p-12 font-mono md:text-3xl'ref={dinnerCardRef}>
          Todays Dinner Suggestions!
          </h1>
      </div>
    <div className='flex justify-center' ref={dinnerRef}>
      <div className='bg-green-200 ml-10 mr-10 text-green-200'>.</div>
        {randomDinner.map((dish, index) => (
          <Link to={`/dishes/${dish._id}`} key={index}>
            <DishComponent
              key={index}
              id={dish._id}
              name={dish.title}
              image={dish.imageUrl}
              description={dish.description}
              onClick={() => navigateToDish(`/test/${dish._id}`)}
            />
          </Link>
        ))}
        <div className='bg-green-200 ml-10 mr-10 text-green-200'>.</div>
      </div>
    </div>
   <div className='mt-20 p-10'>
</div>
</>

);}

export default HomePage;
