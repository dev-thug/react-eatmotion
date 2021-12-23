import classes from "../shop/Shop.module.css";
import ShopItem from "../shop/ShopItem";
import ReviewItem from "./ReviewItem";

const ReviewList = (props) => {
    console.log(props)
    return (
        <div>
            <ul>
                {props.reviews.map((review) => (
                    <ReviewItem
                        key={review.id}
                        id={review.id}
                        content={review.content}
                        grade={review.grade}
                        modifiedDate={review.modifiedDate}
                        userId={review.user.id}
                        userName={review.user.name}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ReviewList;