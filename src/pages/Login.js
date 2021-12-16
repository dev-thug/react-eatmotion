import "./Common.css"
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <p className="e">Eatmotion</p><br/>
                    <input type="text" placeholder="아이디"/>
                    <input type="password" placeholder="비밀번호"/>
                    <button>로그인</button>
                    <p className="message">계정이 없으신가요? <Link to="register"> 회원가입</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login;