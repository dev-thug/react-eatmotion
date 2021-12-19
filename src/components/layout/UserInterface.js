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
                <Link to="/login"><p>로그인</p></Link>
            )}
            {isLoggedIn && (
                <a onClick={logoutHandler}><p>로그아웃</p></a>
            )}
        </div>


    )
}

export default UserInterface;