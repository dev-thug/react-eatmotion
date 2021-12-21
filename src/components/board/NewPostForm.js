import {useRef} from "react";
import classes from './NewPostForm.module.css';

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
        <div className={classes.divEntire}>
            <form onSubmit={submitHandler}>
                <div>
                    <label className={classes.font} htmlFor="title">제목</label>
                    <br/>
                    <input className={classes.input} type="text" required id="title" ref={titleInputRef}  placeholder="제목을 작성해주세요"/>
                </div>
                <div>
                    <label className={classes.font} htmlFor="content" >내용</label>
                    <br/>
                    <textarea className={classes.input} required id="content" rows="10" ref={contentInputRef}  placeholder="내용을 작성해주세요"/>
                </div>
                <div>
                    <button className={classes.btn}>문의 하기</button>
                </div>
            </form>
        </div>
    )
}

export default NewPostForm;