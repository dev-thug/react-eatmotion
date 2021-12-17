const PostItem = (props) => {

    return (<div>
            <p>제목 : {props.title}</p>
            <p>내용 : {props.content}</p>
            <p>작성자 : {props.writer}</p>
        </div>
    )
}

export default PostItem;