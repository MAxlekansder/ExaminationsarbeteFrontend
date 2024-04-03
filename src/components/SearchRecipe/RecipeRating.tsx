import React, {useState} from 'react';

interface RecipeRating {
  dishId: string;
  rating: number | null;
  setRating: (rating: number) => void;
}


const RecipeRating = ({ dishId, setRating }: RecipeRating) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating: number) => {
    console.log(`Rated dish ${dishId} with ${newRating} stars`);
    setRating(newRating);
  };
  const handleMouseEnter = (value: number) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
   // setHoverRating(null);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => handleRatingChange(value)}
            onMouseEnter={() => handleMouseEnter(value)}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer' }}
          >
            {value <= (hoverRating || 0) ? '★' : '☆'}
          </span>
        ))}
      </div>
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
