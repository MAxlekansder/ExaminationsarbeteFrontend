import React, {useState} from 'react';


interface RecipeRating {
  dishId: string;
  rating: number | null;
  setRating: (rating: number) => void;
}

interface MyComment {
    id: number;
    dishId: string;
    text: string;
    author: string;
    createdAt: Date;
}


  const RecipeRating: React.FC<RecipeRating> = ({ dishId, setRating }) => {
      const [hoverRating, setHoverRating] = useState<number | null>(null);
      const [comments, setComments] = useState<MyComment[]>([]);
      const [newComment, setNewComment] = useState<string>('');



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
          setNewComment(event.target.value);
      };

      const handleSubmitComment = () => {
          console.log(`Comment for dish ${dishId}: ${newComment}`);


      const comment: MyComment = {
              id: comments.length + 1,
              dishId: dishId,
              text: newComment,
              author: "Anonym",
              createdAt: new Date()
          };

      setComments([...comments,comment]);
      setNewComment('');
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
        value={newComment}
        onChange={handleCommentChange}
      />
      <button onClick={handleSubmitComment}>
          Submit Comment
      </button>
        <div>
            {comments.map((commentItem) => (
                <div key={commentItem.id}>
                    <p>{commentItem.text}</p>
                    <p>Author: {commentItem.author}</p>
                    <p>Created at: {commentItem.createdAt.toString()}</p>
                </div>
            ))}
    </div>
    </div>
  );
};


export default RecipeRating;
