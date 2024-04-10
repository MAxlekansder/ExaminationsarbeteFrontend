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


    return (
        <div className="bg-white border shadow-md font-bold bg-repeat m-2">
            <p>{comment.comment}</p>
            <p>Created by: {comment.name}</p>
            <p>Created at: {comment.createdAt}</p>
            <p>Rating: {comment.rating}</p>
        </div>
    );
};


export default Comment; 