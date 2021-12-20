import { Link, useHistory } from "react-router-dom";
import { useContext, useRef } from "react";
import classes from "./Auth.module.css";
import AuthContext from "../../store/auth-context";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // const openRegisterPage = passwordInputRef.current.value;

    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.authToken);
        history.replace("/");
        console.log(data);
      });
  };

  return (
    <div className={classes.login}>
      <form onSubmit={submitHandler} className={classes.form}>
        <p className={classes.e}>Eatmotion</p>
        <br></br>
        <input type="text" placeholder="아이디" ref={emailInputRef} />
        <input type="password" placeholder="비밀번호" ref={passwordInputRef} />
        <button>로그인</button>
        <p className={classes.message}>
          계정이 없으신가요? <Link to="register"> 회원가입</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
