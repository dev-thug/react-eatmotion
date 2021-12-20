import {useRef} from "react";

const NewPostForm = (props) => {


    const titleInputRef = useRef();
    const contentInputRef = useRef();


    const submitHandler = (event) => {
        event.preventDefault();


        const enteredTitle = titleInputRef.current.value;
        const enteredContent = contentInputRef.current.value;

        const post = {
            title: enteredTitle,
            content: enteredContent
        }

        props.onAddPost(post)

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div>
                    <label htmlFor="content">content</label>
                    <textarea required id="content" rows="5" ref={contentInputRef}/>
                </div>
                <div>
                    <button>문의 하기</button>
                </div>
            </form>
        </div>
    )
}

export default NewPostForm;