import {useContext, useRef} from "react";
import {useHistory} from "react-router-dom";
import AuthContext from "../../store/auth-context";

const NewReviewForm = ({match}) => {

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

        fetch(
            `/api/text-review/${match.params.id}`,
            {
                method: "POST",
                body: JSON.stringify(review),
                headers: {
                    "Content-Type": "application/json",
                    "authToken": authCtx.token
                }
            }
        ).then(res => {
            console.log(res)
        }).then(() => {
            history.replace("/reserve")
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