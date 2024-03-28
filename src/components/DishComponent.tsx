//import React, { useEffect, useState } from 'react';
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
  onClick: () => void;
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
        <RecipeRating dishId={id} rating={rating} setRating={setRating} />
        
      </div>
    );
  }

 
  return (
    <div className='card-fade-in '>
      <div className="">
      
        <Link to={`/test/${id}`}>
          <img
            src={image}
            alt={name}
            className="object-cover 2xl:h-96 2xl:w-96 xl:h-60 xl:w-60"
          />
        </Link>
       
      </div>
      <p className="mt-2 xl:font-semibold 2xl:text-2xl xl:text-xm md:text-sm ">{name}</p>
      <div className='flex '>
        <p className="mt-2 w-40 2xl:text-xm xl:text-xs md:text-sm ">{description}</p>
        </div>
    </div>
  );
}

export default DishComponent;
