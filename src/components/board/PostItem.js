import {Link} from "react-router-dom";
import classes from "./PostItem.module.css"

const PostItem = (props) => {

    const detail = "/post/"+props.id

    return (
        <div className={classes.boardview}>
            <h3>{props.title}</h3>
            <p>작성자 : {props.writer}</p>
            <br/>
            <Link to={detail}>상세 조회</Link>
            <br/>
        </div>
    )
}

export default PostItem;
