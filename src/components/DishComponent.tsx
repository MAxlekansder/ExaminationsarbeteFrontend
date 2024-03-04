import React from 'react';

interface DishProps {
  name: string;
  image: string;
  recipe?: string;  //Gör recipe-egenskapen valfri.
  onClick: () => void;
}

const DishComponent: React.FC<DishProps> = ({ name, image, onClick }) => {
  return (
    <div className="dish" onClick={onClick}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default DishComponent;
