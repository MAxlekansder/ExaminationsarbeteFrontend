import React from 'react';
import { useParams } from 'react-router-dom';

const DishDetailsPage: React.FC = () => {
  // Hämta parametern för den valda maträtten från URL:en
  const { dishId } = useParams<{ dishId: string }>();

  const dishes = [
    {
      id: 'pasta-carbonara',
      name: 'Pasta Carbonara',
      image: 'https://mccormick.widen.net/content/vqhpgqv6r8/original/easy_spaghetti_carbo_637390546045230895_800x800.jpg',
      description: 'Mycket god mat',
    },
    {
      id: 'caesar-sallad',
      name: 'Caesar Sallad',
      image: 'https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg',
      description: 'En fräsch sallad med krämig dressing.',
    },
    // Andra maträtter...
  ];

  // Hitta den valda maträtten baserat på dishId
  const selectedDish = dishes.find(dish => dish.id === dishId);

  if (!selectedDish) {
    return <div>Maträtten kunde inte hittas.</div>;
  }

  return (
    <div>
      <h2>{selectedDish.name}</h2>
      <img src={selectedDish.image} alt={selectedDish.name} />
      <p>{selectedDish.description}</p>
    </div>
  );
};

export default DishDetailsPage;