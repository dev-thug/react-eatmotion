import "./Common.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {

    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;


    return (
        <nav class="nav_mybar ">
            <div class="nav_mylogo navbox">

                <Link class="logo" to="/">Eatmotion</Link>
            </div>


            <div id="menu">
                <li><a href="#">맛집 찾기</a>
                    <ul>
                        <li><a href="#">카테고리 검색</a></li>
                        <li><a href="#">지도에서 보기</a></li>
                    </ul>
                </li>
                {isLoggedIn && (
                    <li><a href="#">내정보</a>
                        <ul>
                            <li><a href="#">회원 정보</a></li>
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