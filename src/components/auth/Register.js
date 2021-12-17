import "../../pages/Common.css"
import {useRef} from "react";
import {useHistory} from "react-router-dom";

const Register = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const nameInputRef = useRef();
    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredName = nameInputRef.current.value;

        fetch("/api/register",
            {
                method: "POST",
                body: JSON.stringify({
                    email: enteredEmail,
                    name: enteredName,
                    password: enteredPassword
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => {
            if (res.ok) {
                history.replace("/login")
            }
        })
    }


    return (

        <div className="form">
            <form onSubmit={submitHandler}>
                <p className="e">Eatmotion</p><br/>
                <input type="text" placeholder="이름" ref={nameInputRef}/>
                {/*<input type="number" placeholder="생년월일 ex)20201206"/>*/}
                {/*<input type="text" placeholder="아이디"/>*/}
                <input type="text" placeholder="이메일 주소" ref={emailInputRef}/>
                <input type="password" placeholder="비밀번호" ref={passwordInputRef}/>
                {/*<input type="password" placeholder="비밀번호 확인"/>*/}
                {/*<input type="number" placeholder="전화번호 ex)01012345678"/>*/}
                <button>회원가입</button>
                <p className="message">이미 계정이 있으신가요? <a href="#">로그인</a></p>
            </form>
        </div>

    )
}

export default Register