import classes from "./MainNavigation.module.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../../store/auth-context";


const MainNavigation = () => {

    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    return (


        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to="/">Eatmotion</Link>
            </div>
            <nav className={classes.menu}>
                <ul>
                    <li>
                        <Link to="/shop">맞집 찾기</Link>
                        {/*<ul>*/}
                        {/*    <li><a href="#">주변 맛집</a></li>*/}
                        {/*    <li><a href="#">지도 찾기</a></li>*/}

                        {/*</ul>*/}
                    </li>
                    <li>
                        <a href="#">고객 문의</a>
                        <ul>
                            <li><Link to="/board">문의 하기</Link></li>
                            <li><a href="#">버전 정보</a></li>

                        </ul>
                    </li>
                    {isLoggedIn && (
                    <li>
                        <a href="#">내 정보</a>
                        <ul>
                            <li><Link to="/me">회원 정보</Link></li>
                            <li><a href="#">다녀간 음식점</a></li>
                            <li><a href="#">남긴 리뷰</a></li>

                        </ul>
                    </li>
                        )}
                </ul>
            </nav>
        </header>


    );
}

export default MainNavigation;