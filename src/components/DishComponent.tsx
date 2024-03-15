import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // Add this import


interface DishProps {
  id: string;
  name: string;
  image: string;
  recipe?: string;
  ingredients: string[];
  onClick: () => void;
}

const DishComponent: React.FC<DishProps> = ({ id, name, image, ingredients }) => {
  const { dishId } = useParams<{ dishId: string }>(); // Fetching dishId from URL

  // This part is responsible for displaying the details of the selected dish
  // You may need to modify it to fit the structure of DishComponent
  if (id === dishId) { // If the current dish matches the selected dish
    return (
      <div >
        <h2>{name}</h2>
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

  // Here is the existing code of DishComponent
  // It handles displaying the list of dishes
  return (
    <div className="dish  ">
      <Link to={`/dishes/${id}`}>
        <div className='pl-4 pr-4'>
        <p className="lunch-label pl-4 pr-4 ">Dagens lunch</p>
        <img src={image} alt={name} />
        <p className="dish-name">{name}</p>
        </div>
      </Link>
    </div>
  );
}

export default DishComponent;
