import PostItem from "./PostItem";

const PostList = (props) => {



    return (
        <ul>
            {props.content.map(post => <PostItem
                id={post.id}
                title={post.title}
                content={post.content}
                writer={post.writer}
                date={post.modifiedDate}
            />)}
        </ul>
    )
}

export default PostList;