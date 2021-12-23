import classes from "./ReviewItem.module.css";

const ReviewItem = (props) => {
    return (
        <div className={classes.reviewlist}>
            <p>리뷰 번호 : {props.id}</p>
            <p>리뷰 내용 : {props.content}</p>
            <p>리뷰 점수 : {props.grade}</p>
            <p>작성일 : {props.modifiedDate}</p>
            <p>사용자 키값 : {props.userId}</p>
            <p>사용자 이름 : {props.userName}</p>
        </div>
    )
}
export default ReviewItem;