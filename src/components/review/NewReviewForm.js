import {useContext, useRef} from "react";
import {useHistory} from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./NewReviewForm.module.css"

const NewReviewForm = (props) => {

    const contentInputRef = useRef();
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredContent = contentInputRef.current.value;

        const review = {
            content: enteredContent
        }

        addReviewHandler(review)

    }


    const addReviewHandler = (review) => {
        console.log(JSON.stringify(review))
        fetch(
            `/api/text-review/${props.id}`,
            {
                method: "POST",
                body: review.content,
                headers: {
                    "Content-Type": "application/json",
                    "authToken": authCtx.token
                }
            }
        ).then(res => {
            console.log(res)
        }).then(() => {
            window.location.replace(`/shop-info/${props.id}`)
        })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <textarea className={classes.textbox} rows="3" placeholder="리뷰를 작성해주세요" ref={contentInputRef}/>
                <button className={classes.reviewbtn}>리뷰 작성</button>
            </form>

        </div>
    )
}

export default NewReviewForm;