import React from 'react';
import '../data/Dishes.css';
import { Link } from 'react-router-dom';

interface DishProps {
  id: string;
  name: string;
  image: string;
  recipe?: string;  // Gör recipe-egenskapen valfri.
  ingredients: string[]; // Lägg till ingredients här
  onClick: () => void;
}

const DishComponent: React.FC<DishProps> = ({ name, image, ingredients}) => {
  return (
    <div className="dish">
    <Link to={`/dishes/${name}`}>
    <p className="lunch-label">Dagens lunch</p>
      <img src={image} alt={name} />
      <p className="dish-name">{name}</p>
    </Link>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default DishComponent;
