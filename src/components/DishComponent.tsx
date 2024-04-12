//Gustav & Mehdi
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../Styling/Dishes.css'
import RecipeRating from './SearchRecipe/RecipeRating';


interface DishProps {
  id: string;
  name: string;
  image: string;
  recipe?: string;
  ingredients: string[];
  description?: string;

}

const DishComponent = ({ id, name, image, ingredients, description }: DishProps) => {
  const { dishId } = useParams<{ dishId: string }>(); //Fetching dishId from URL
  
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    console.log('DishComponent har monterats');
  }, []);
 
 // Om dishId matchar id, visa detaljer om rätten
  if (id === dishId) {
    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <img src={image} alt={name} />
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <RecipeRating dishId={id} rating={rating} 
        // setRating={setRating}
          />
        
      </div>
    );
  }

 return (
    <div className='card-fade-in'>
      <div className="sm:flex sm:items-center sm:align-center xl:ml-0 lg:ml-0 2xl:ml-0 
        ">
        <Link to={`/recipe/specificRecipe/${id}`}>
          <img
            src={image}
            alt={name}
            className="object-cover 2xl:h-96 2xl:w-96 md:w-60 md:h-60 sm:w-80 sm:h-80 2xl:ml-0 sm:ml-40 xl:m-0 lg:w-60 lg:h-60 "
          />
        </Link>
      </div>
    <p className="mt-2 font-semibold 2xl:text-2xl xl:text-xm md:text-sm sm:text-2xl sm:text-center lg:text-sm">{name}</p>
      <div className='xl:flex sm:align-middle sm:items-center sm:flex sm:justify-center'>
        <p className="xl:mt-2 xl:w-40 xl:ml-0 2xl:mb-0  2xl:text-xm xl:text-xs md:text-sm sm:mb-6 sm:w-80 lg:w-40">{description}</p>
      </div>
    </div>
  );
}

export default DishComponent;
