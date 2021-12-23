import {useContext, useRef} from "react";
import {useHistory} from "react-router-dom";
import AuthContext from "../../store/auth-context";

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
                리뷰 작성
                <input type="text" ref={contentInputRef}/>
                <button>작성</button>
            </form>

        </div>
    )
}

export default NewReviewForm;