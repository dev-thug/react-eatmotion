import "./Common.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../../store/auth-context";

const UserInterface = () => {
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        authCtx.logout();
    }


    return (
        <div class="wrap">
            <div class="login_top_div">
                <div class="login_top">
                    {!isLoggedIn && (
                        <Link class="button" to="/login" id="loginBtn">로그인</Link>
                    )}
                    {isLoggedIn && (
                        <a class="button" id="loginBtn" onClick={logoutHandler}>로그아웃</a>
                    )}
                </div>

            </div>
        </div>
    )
}

export default UserInterface;