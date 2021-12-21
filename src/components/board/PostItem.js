import {Link} from "react-router-dom";

const PostItem = (props) => {

    const detail = "/post/"+props.id

    return (
        <div>
            <p>제목 :{props.title}</p>
            <p>내용 : {props.content}</p>
            <p>작성자 : {props.writer}</p>
            <p>날짜 : {props.date}</p>
            <br/>
            <Link to={detail}>상세 조회</Link>
        </div>
    )
}

export default PostItem;