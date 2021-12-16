import "./Common.css"

const Register = () => {
    return (
        <div className="login-page">
            <div className="form">
                <form className="register-form">
                    <p className="e">Eatmotion</p><br/>
                    <input type="text" placeholder="이름"/>
                    <input type="number" placeholder="생년월일 ex)20201206"/>
                    <input type="text" placeholder="아이디"/>
                    <input type="password" placeholder="비밀번호"/>
                    <input type="password" placeholder="비밀번호 확인"/>
                    <input type="text" placeholder="이메일 주소"/>
                    <input type="number" placeholder="전화번호 ex)01012345678"/>
                    <button>회원가입</button>
                    <p className="message">이미 계정이 있으신가요? <a href="#">로그인</a></p>
                </form>
            </div>
        </div>
    )
}

export default Register