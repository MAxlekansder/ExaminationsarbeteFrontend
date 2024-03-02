import React from 'react';
import DishComponent from '../components/DishComponent';
import dishes from '../data/Dishes';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Välkommen till vår matlagningshemsida!</h1>
      <div className="dish-container">
        {dishes.map((dish, index) => (
          <DishComponent
            key={index}
            name={dish.name}
            image={require(`../images/${dish.image}`).default}
            onClick={() => console.log(dish.recipe)} // Eller annan logik för att visa receptet
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
