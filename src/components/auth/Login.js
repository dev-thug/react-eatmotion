
import {Link, useHistory} from "react-router-dom";
import {useContext, useRef} from "react";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";

const Login = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword
            }),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                res.json().then(data => {
                    console.log(data)
                })
            }
        }).then(data => {
            authCtx.login(data.authToken)
            history.replace("/")
            console.log(data)
        })

    }

    return (
        <div className={classes.login}>
            <div className="form">
                <form className="login-form" onSubmit={submitHandler}>
                    <p className="e">Eatmotion</p><br/>
                    <input type="text" placeholder="아이디" ref={emailInputRef}/>
                    <input type="password" placeholder="비밀번호" ref={passwordInputRef}/>
                    <button>로그인</button>
                    <p className="message">계정이 없으신가요? <Link to="register"> 회원가입</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login;