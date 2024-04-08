export interface CommentProps {

    comment: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    rating: string;
}

export interface Props {
    comment: CommentProps;
}


const Comment: React.FC<Props> = (props) => {
    const { comment } = props;

    const handleDelete = () => {

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