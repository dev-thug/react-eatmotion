import classes from "./ReviewItem.module.css";

const ReviewItem = (props) => {
    return (
        <div className={classes.reviewlist}>
            <div className={classes.head}>
                <h5 className={classes.username}>{props.userName}</h5>
                <div className={classes.grade}>{Math.round(props.grade)}</div>
            </div>
            <p>{props.content}</p>
            <div className={classes.date}>{props.modifiedDate}</div>
            {/* <p>리뷰 번호 : {props.id}</p> */}
            {/* <p>사용자 키값 : {props.userId}</p> */}
        </div>
    )
}
export default ReviewItem;