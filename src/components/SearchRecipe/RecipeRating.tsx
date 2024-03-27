import React from 'react';

interface RecipeRatingProps {
  dishId: string;
  rating: number | null;
  setRating: (rating: number) => void;
}

const RecipeRating: React.FC<RecipeRatingProps> = ({ dishId, rating, setRating }) => {
  const handleRatingChange = (newRating: number) => {
   
    console.log(`Rated dish ${dishId} with ${newRating} stars`);
    setRating(newRating);
  };

  return (
    <div> 
      {[1, 2, 3, 4, 5].map((value) => (
        <button key={value} onClick={() => handleRatingChange(value)}>
          {value} {rating === value && '★'} 
        </button>
      ))}
    </div>
  );
};

export default RecipeRating;
