import classes from "./PostDetail.module.css"

const PostDetail = (props) => {

    return (
        <div className={classes.postmargin}>
            <h1 className={classes.posttitle}>{props.title}</h1>
            <p className={classes.postwriter}>작성자 : {props.writer}
            &emsp;&emsp;&emsp;&emsp;&emsp;
            날짜 : {props.date}</p>
            <p className={classes.postcontent}>{props.content}</p>
            
            <br/>

        </div>
    )
}

export default PostDetail;