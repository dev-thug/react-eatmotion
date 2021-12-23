import {useContext, useEffect, useState} from "react";
import PostList from "../../components/board/PostList";
import {Link} from "react-router-dom";
import classes from "./Board.module.css";
import Loading from "../../components/ui/Loading";
import AuthContext from "../../store/auth-context";


const Board = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedPosts] = useState([]);
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;
    useEffect(() => {
        setIsLoading(true);
        fetch("/api/posts/1?size=10&page=0")
            .then(response => {
                return response.json();
            })
            .then(data => {

                console.log(data)
                setIsLoading(false);
                setLoadedPosts(data.content);
                console.log(loadedPosts)
            })
    }, []);


    if (isLoading) {
        return (
            <section>
                <Loading/>
            </section>
        )
    }

    return (
        <div className={classes.boardborder}>
            <PostList content={loadedPosts}/>
            {isLoggedIn && (
                <Link to="post-write">
                    <button className={classes.Btn}>글쓰기</button>
                </Link>
            )}
        </div>
    )
}

export default Board;