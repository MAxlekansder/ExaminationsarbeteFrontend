import React, { useEffect, useState } from 'react';
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

const DishComponent: React.FC<DishProps> = ({ id, name, image, ingredients, description }) => {
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
    <div className=' relative card-fade-in inline-flex border shadow-lg p-3  bg-gray-50 m-6'>
      <div className="m-12 ">
        <Link to={`/dishes/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-40 h-40 object-cover border shadow-lg'"
          />
          <p className="text-center mt-2 font-semibold">{name}</p>
          
          
        </Link>
      </div>
      <p className="align-bottom des-text">{description}</p>
    </div>
  );
}

export default DishComponent;
