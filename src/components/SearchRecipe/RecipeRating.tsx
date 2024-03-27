import React, {useState} from 'react';

interface RecipeRating {
  dishId: string;
  rating: number | null;
  setRating: (rating: number) => void;
}


  const RecipeRating: React.FC<RecipeRating> = ({ dishId, rating, setRating }) => {
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating: number) => {
    console.log(`Rated dish ${dishId} with ${newRating} stars`);
    setRating(newRating);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  return (
    <div> 
      {[1, 2, 3, 4, 5].map((value) => (
        <button key={value} onClick={() => handleRatingChange(value)}>
          {value} {rating === value && '★'} 
        </button>
      ))}
      <textarea
        placeholder="Enter your comment here.."
        value={comment}
        onChange={handleCommentChange}
        />
      <button onClick={() => console.log(`Comment for dish ${dishId}: ${comment}`)}>

      </button>
    </div>
  );
};

export default RecipeRating;
