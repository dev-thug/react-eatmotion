import {useHistory} from "react-router-dom";
import NewPostForm from "../../components/board/NewPostForm";
import {useContext} from "react";
import AuthContext from "../../store/auth-context";

const NewPost = () => {

    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const addPostHandler = (post) => {

        fetch(
            "https://hayagou.shop/api/post/1",
            {
                method: "POST",
                body: JSON.stringify(post),
                headers: {
                    "Content-Type": "application/json",
                    "authToken": authCtx.token
                }
            }
        ).then(() => {
            history.replace("/board")
        })
    }

    return (
        <section>
            <h1>문의 하기</h1>
            <NewPostForm onAddPost={addPostHandler}/>
        </section>
    )
}

export default NewPost;