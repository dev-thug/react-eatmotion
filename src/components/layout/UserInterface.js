import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../../store/auth-context";
import classes from "./UserInterface.module.css";

const UserInterface = () => {
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        authCtx.logout();
    }


    return (


        <div className={classes.left}>
            {!isLoggedIn && (
                <Link to="/login"><button className={classes.Btn}>로그인</button></Link>
            )}
            {isLoggedIn && (
                <a onClick={logoutHandler}><button className={classes.Btn}>로그아웃</button></a>
            )}
        </div>


    )
}

export default UserInterface;