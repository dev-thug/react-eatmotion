import classes from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={classes.center}>
        <div className={classes["lds-heart"]}>
            <div></div>
        </div>
        </div>
    )
}
export default Loading