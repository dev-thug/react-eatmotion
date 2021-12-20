import PostItem from "./PostItem";
import {Link} from "react-router-dom";

const PostList = (props) => {
    return (
        <div>
            <ul>
                {props.content.map(post =>
                    <PostItem
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    writer={post.writer}
                    date={post.modifiedDate}
                />
                )}

            </ul>
        </div>
    )


}

export default PostList;