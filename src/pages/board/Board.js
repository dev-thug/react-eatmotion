import {useEffect, useState} from "react";
import PostList from "../../components/board/PostList";


const Board = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedPosts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("/posts/1?size=10&page=0")
            .then(response => {
                return response.json();
            })
            .then(data => {


                setIsLoading(false);
                setLoadedPosts(data.content);
            })
    }, []);


    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <div>
            <h1>Board</h1>
            <PostList content={loadedPosts}></PostList>
        </div>
    )
}

export default Board;