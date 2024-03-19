import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // Add this import

interface DishProps {
  id: string;
  name: string;
  image: string;
  recipe?: string;
  ingredients: string[];
  description: string;
  onClick: () => void;
}

const DishComponent: React.FC<DishProps> = ({id, name, image, ingredients, description}) => {
  const { dishId } = useParams<{ dishId: string }>(); //Fetching dishId from URL


  // This part is responsible for displaying the details of the selected dish
  // You may need to modify it to fit the structure of DishComponent
  // If the current dish matches the selected dish
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
        {/* You can include more details about the dish here */}
      </div>
    );
  }

return (
  <div className='card-fade-in inline-flex border shadow-lg p-3  bg-gray-50 m-6'>
    <div className="m-12 border">
    <Link to={`/dishes/${id}`} className=''>
          <img 
          src={image} 
          alt={name} 
          className="w-40 h-40 object-cover border shadow-lg"
           />
          <p className="text-center mt-2 font-semibold">{name}</p>
          <p className="text-center">{description}</p>
    
      </Link>
    </div>
    </div>
  );
}


export default DishComponent;
