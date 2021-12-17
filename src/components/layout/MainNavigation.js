import "./Common.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {

    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;


    return (
        <nav className="nav_mybar ">
            <div className="nav_mylogo navbox">

                <Link className="logo" to="/">Eatmotion</Link>
            </div>


            <div id="menu">
                <li><a href="#">맛집 찾기</a>
                    <ul>
                        <li><a href="#">항목별 검색</a></li>
                        <li><a href="#">지도에서 보기</a></li>
                    </ul>
                </li>
                {isLoggedIn && (
                    <li><a href="#">내정보</a>
                        <ul>
                            <li><Link to="/me">회원 정보</Link></li>
                            <li><a href="#">다녀간 음식점</a></li>
                            <li><a href="#">남긴 리뷰</a></li>
                        </ul>
                    </li>
                )}
                <li><a href="#">고객지원</a>
                    <ul>
                        <li><a href="#">문의 하기</a></li>
                        <li><a href="#">버전 정보</a></li>
                    </ul>
                </li>
            </div>


        </nav>


    );
}

export default MainNavigation;