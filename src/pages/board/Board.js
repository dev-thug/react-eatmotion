import {useEffect, useState} from "react";
import PostList from "../../components/board/PostList";


const Board = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedPosts] = useState([]);

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
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <div>
            <h1>Board</h1>
            <PostList content={loadedPosts}/>
        </div>
    )
}

export default Board;