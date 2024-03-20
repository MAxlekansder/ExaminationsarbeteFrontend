import React from 'react';
import DishComponent from '../components/DishComponent';
import dishes from '../data/Dishes';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const lunchDishes = dishes.filter(dish => ['pastaCarbonara', 'caesarSallad', 'lamspett'].includes(dish.id));
  const dinnerDishes = dishes.filter(dish => ['fisk', 'vego', 'kött'].includes(dish.id));
  
  return (
    <div>

       <div className='testa-laga-text bg-green-200 m-20 mt-0 mb-0'>
      <h1 className='text-center m-5 text-4xl p-12'>
        Testa att laga dagens lunch!
        </h1>
      </div>
    <div className='flex justify-center'>
    <div className='bg-green-700 ml-10 mr-10 text-green-700'>.
    </div>
      {lunchDishes.map((dish, index) => (
          <Link to={`/dishes/${dish.id}`} key={index}>
            <DishComponent
              key={index}
              id={dish.id}
              name={dish.name}
              image={dish.image}
              recipe={dish.recipe}
              ingredients={dish.ingredients}
              description={dish.description}
              onClick={() => console.log(dish.recipe)}
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
      <h1 className='text-center m-5 text-4xl p-12'>Testa att laga dagens middag!</h1>
      </div>
    <div className='flex justify-center'>
    <div className='bg-green-200 ml-10 mr-10 text-green-200'>.
    </div>
      {dinnerDishes.map((dish, index) => (
          <Link to={`/dishes/${dish.id}`} key={index}>
            <DishComponent
              key={index}
              id={dish.id}
              name={dish.name}
              image={dish.image}
              recipe={dish.recipe}
              ingredients={dish.ingredients}
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