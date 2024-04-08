import React, {useEffect, useState} from 'react';
import axios, {} from 'axios';
import Comment, {CommentProps} from "./Comment.tsx";


interface RecipeRating {
    dishId: string;
    rating: number | null;
    removeComment: (id: number) => Promise<void>;
}

/*interface RatingResponse {
  success: boolean;
  message: string;
}
*/
interface MyComment {
    id: number;
    dishId: string;
    text: string;
    author: string;
    createdAt: Date;
}


const RecipeRating: React.FC<RecipeRating> = ({dishId, rating}) => {
    const [hoverRating, setHoverRating] = useState<number | null>(rating);
    const [comments, setComments] = useState<MyComment[]>([]);
    const [newComment, setNewComment] = useState<string>('');


    const addComment = () => {
        axios.post(
            `https://sti-java-grupp2-afmbgd.reky.se/recipes/${dishId}/comments`,
            {
                comment: newComment,
                name: name,
            }
        )
            .then((response) => {
                console.log('Comment saved successfully:', response.data);
                loadComments()
            })
            .catch((error) => {
                console.error('Error saving rating:', error);
            });

    };

    const loadComments = () => {
        axios.get(
            `https://sti-java-grupp2-afmbgd.reky.se/recipes/${dishId}/comments`
        )
            .then((response) => {
                console.log('Loaded comments:', response.data);
                setComments(response.data)
            })
            .catch((error) => {
                console.error('Error saving rating:', error);
            });
    }

    const handleRatingChange = (newRating: number) => {
        console.log(`Rated dish ${dishId} with ${newRating} stars`);
        // setRating(newRating);

        axios.post(
            `https://sti-java-grupp2-afmbgd.reky.se/recipes/${dishId}/ratings`,
            {
                "rating": newRating
            }
        )
            .then((response) => {
                console.log('Rating saved successfully:', response.data);
                //if (response.data.success) {
                // setRating(newRating);
                // }
            })
            .catch((error) => {
                console.error('Error saving rating:', error);
            });
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

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmitComment = async () => {
        console.log(`Comment for dish ${dishId}: ${newComment}`);
    }

    const comment: MyComment = {
        id: comments.length + 2,
        dishId: dishId,
        text: newComment,
        author: "Anonym",
        createdAt: new Date()
    };

    setComments([...comments, comment]);
    setNewComment('');

    return (
        <div>
            <div>
                {[1, 2, 3, 4, 5].map((value) => (
                    <span
                        key={value}
                        onClick={() => handleRatingChange(value)}
                        onMouseEnter={() => handleMouseEnter(value)}
                        onMouseLeave={handleMouseLeave}
                        style={{cursor: 'pointer'}}
                    >
            {value <= (hoverRating || 0) ? '★' : '☆'}
          </span>
                ))}
            </div>
            <div>
                <textarea
                    className="bg-gray-300"
                    placeholder="Enter your comment here.."
                    value={newComment}
                    onChange={handleCommentChange}
                />
                <input
                    className="bg-gray-300"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <button onClick={handleSubmitComment}>
                Submit Comment
            </button>
            <div>
                {comments.map((commentItem) => (
                    <div key={commentItem.id}>
                        <p>{commentItem.text}</p>
                        <p>Author: {commentItem.author}</p>
                        <p>Created at: {commentItem.createdAt.toDateString()}</p>

                    </div>
                ))}
            </div>
        </div>
    );
};


export default RecipeRating;
