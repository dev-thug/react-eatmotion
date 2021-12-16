import "./Common.css"
import {Link} from "react-router-dom";

const UserInterface = () => {
    return (
        <div class="wrap">
            <div class="login_top_div">
                <div class="login_top">
                    <Link class="button" to="/login" id="loginBtn">로그인</Link>
                </div>
            </div>
        </div>
    )
}

export default UserInterface;