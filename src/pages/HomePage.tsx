import React from 'react';
import DishComponent from '../components/DishComponent';
import dishes from '../data/Dishes';
import { Link } from 'react-router-dom';




const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="dish-container">
        {dishes.map((dish, index) => (
       <Link to={`/dishes/${dish.id}`} key={index}>
       <DishComponent
         key={index}
         id={dish.id} 
         name={dish.name}
         image={dish.image}
         recipe={dish.recipe}
         ingredients={dish.ingredients}
         onClick={() => console.log(dish.recipe)} // Eller annan logik för att visa receptet.
       />
     </Link>
     
        ))}
      </div>
    </div>
  );
}

export default HomePage;
