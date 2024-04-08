export interface CommentProps {
    // id: string; denna måste finnas för att vi ska kunna radera en kommentar, be någon i såfall att lägga till detta i api:t för Hämta alla kommentarer för ett recept
    comment: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    rating: string;
}

export interface Props {
    comment: CommentProps;
}


const Comment: React.FC<Props> = (props) => { // Använda rätt variabel för props
    const { comment } = props; // Deklarera och destrukturera removeFromComment

     const handleDelete = () => {
        // call API for delete comment for specific recipe
        // när du raderar en kommentar så kommer du att behöva skicka med ID:t på kommentaren till API:t
        console.log("DELETE COMMENT (Not implemented)")
    }




    return (
        <div className="bg-green-400 font-bold bg-repeat m-2">
            <p>{comment.comment}</p>
            <p>Created by: {comment.name}</p>
            <p>Created at: {comment.createdAt}</p>
            <p>Rating: {comment.rating}</p>


            <button
                onClick={handleDelete}
                className="ml-4 bg-black hover:bg-green-800 text-white font-bold py-0.5 px-1 rounded scale-95"
            >
                Delete
            </button>

        </div>
    );
};


export default Comment;
