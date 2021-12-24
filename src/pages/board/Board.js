import {useContext, useEffect, useState} from "react";
import PostList from "../../components/board/PostList";
import {Link} from "react-router-dom";
import classes from "./Board.module.css";
import Loading from "../../components/ui/Loading";
import AuthContext from "../../store/auth-context";
import Paging from "../../components/board/Paging";

const Board = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedPosts] = useState([]);
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/posts/1?size=5&page=${currentPage-1}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                setIsLoading(false);
                setLoadedPosts(data.content);
                console.log(loadedPosts)
                setTotalItemsCount(data.totalElements);
                console.log(currentPage-1);

            })
    }, [currentPage]);


    if (isLoading) {
        return (
            <section>
                <Loading/>
            </section>
        )
    }
    const pageNate= ()=>{
        setCurrentPage();
    }
    return (
        <>
        <div className={classes.boardborder}>
            <PostList content={loadedPosts}/>
            {isLoggedIn && (
                <Link to="post-write">
                    <button className={classes.Btn}>글쓰기</button>
                </Link>
            )}
        <Paging page={currentPage} count={totalItemsCount} setPage={setCurrentPage} />
        </div>
        </>
    )
}

export default Board;