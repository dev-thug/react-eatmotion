import {useEffect, useState} from "react";
import PostItem from "../../components/board/PostItem";
import PostDetail from "../../components/board/PostDetail";

const Post = ({match}) => {

    console.log(match.params)

    const [isLoading, setIsLoading] = useState(true);
    const [loadedPost, setLoadedPost] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/post/${match.params.id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                setIsLoading(false);
                setLoadedPost(data);

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
          <PostDetail
              id={loadedPost.id}
              title={loadedPost.title}
              content={loadedPost.content}
              writer={loadedPost.writer}
              date={loadedPost.modifiedDate} />
      </div>
  )
}

export default Post;