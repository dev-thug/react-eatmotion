import {useEffect, useState} from "react";
import ShopItem from "./ShopItem";
import ReviewList from "../review/ReviewList";
import {Link} from "react-router-dom";
import NewReviewForm from "../review/NewReviewForm";
import classes from "./ShopInfo.module.css"
import Loading from "../ui/Loading";

const ShopInfo = ({match}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedReviews, setLoadedReviews] = useState([]);
    const [loadedShop, setLoadedShop] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/shop/${match.params.id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {

                console.log(data)
                setIsLoading(false);
                setLoadedShop(data);

            })
        fetch(`/api/reviews/${match.params.id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {

                console.log(data)
                setIsLoading(false);
                setLoadedReviews(data);

            })
    }, []);

    let image = ""
    if (loadedShop.foodClassific === "한식") {
        image = "https://sat02pap001files.storage.live.com/y4muBNjjLV1S3srkmpKb_LXzKnCSonTbnAqrMUmLicnPpJtp2FaVZMEPQikOt4o0U6BJPdi5SEMOVbhQ0-EsdH13YLInGXS25HSR0APXAJMQFS4zJd1LraGsvEQMcnIfer0zU-H-21rPgEstrNYxArRZiGxt6e_pyAjkVTCvBKGuxBENQMQkTxpPva1-cMUgDdR7gdCI8cW-jaGJRFCRRChOw/%ED%95%9C%EC%8B%9D.jpg?psid=1&width=1087&height=815"
    } else if (loadedShop.foodClassific === "패스트푸드") {
        image = "https://sat02pap001files.storage.live.com/y4mzspFMZ1zyhTrrY2JEShm9V9Q8R2yzrfeMaLiOw0rc0rl11M9XdaKDyAPAeeaqT8JFMCUMkVgwS8PF3ghgzgF6O1CjRhG06ameXLBwmyspi5X13YbxCdgdEAzLMkQlRpBP4IV_ARGHqTzFRzXgzOtTqzA61yjA-ebRL-pGHMlF7RyqxNSheQqB-mPmJ_GmHKKGjCAt6L6qYwBe31ABJbf3A/%ED%8C%A8%EC%8A%A4%ED%8A%B8%ED%91%B8%EB%93%9C.jpg?psid=1&width=1087&height=815"
    } else if (loadedShop.foodClassific === "호프(소주방)") {
        image = "https://sat02pap001files.storage.live.com/y4m326YYnCVrrZasi-IZFT6jgkdOIL8nIDhicEi1Z5dSKBqOTTUOPhS5O4RCNNsgiDTlqfOp8jalqGOKam62ZqbIZ7PtzjCQOrreIF5eMcZZkIm0ZwuGy_ZuTMhpzcSIYiMb9Yd1hH4OYSBeZYAdTZdC3ADz0xpI1gc0CvGdd7jusHZlrHVW9Jm_4OtUvcsDIJZEgy4MxnLot8U-H0k40CAWQ/%ED%98%B8%ED%94%84(%EC%86%8C%EC%A3%BC%EB%B0%A9).jpeg?psid=1&width=1040&height=585"
    }
    //
    else if (loadedShop.foodClassific === "경양식") {
        image = "https://4qc9iq.sn.files.1drv.com/y4mvckTqAugpnPAVLu8lPHlTSHjFUpZRTCRmhd7fNwrBepONsoUrxwEPwgUXjDEXM1KsDMkgEK9PnL12oRpAmpmNjTQ46KKWf9QjRfJ0XprH-CCwcMeAOxXELSQR6npPfP5gV1ofKPJ9Ra37ANIUYOBOqaANJG90Nr2_O2ekGYSXs0pnFJ3xGbjFLpulm99siUcKAFznHIC4j-S4i0rU7DLVw/%EA%B2%BD%EC%96%91%EC%8B%9D.jpg?psid=1"
    } else if (loadedShop.foodClassific === "과자점") {
        image = "https://sat02pap001files.storage.live.com/y4m8NUUex6YYtnlCfvkm6IlQiAC0XGGWztlQBQ8sYlXQ1q5VmFILKlXtI9LdLdPdT7SmC1oJZNgHBxlgF764V6VI2T5G-WdPtMrVpmm7XORxBLv2Wu-uPNTN4-kg73OHQn8leg4NfrXqIACCoaKQZx8hVP282YyAKINIlIwucZwyty7ov2dIoa7t8DIeasKazeEyD6uyZqyocGoNn7osnM92g/%EA%B3%BC%EC%9E%90%EC%A0%90.jpeg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "기타(일반음식점)") {
        image = "https://sat02pap001files.storage.live.com/y4mC_-SUKrIJZMI-ucZQQbdsS8_o20nV9SV8YyS-hjli1_e6aW2dJzo9Z_-jV9ku2tPDC9hrNJ54VjmVC9JNwhI9sc-0uyeiRgrMggGZ8OBeOwgTZIxIQvmthwamcji2GXNhYeonaYVY97fO0W0Fw9bWnL7sc1eBa_0D7nMhRQdSD8NfqRSv_OLSaKK34WyeeGWjpOfWvaL3C4YHTJrdKLjMA/%EA%B8%B0%ED%83%80(%EC%9D%BC%EB%B0%98%EC%9D%8C%EC%8B%9D%EC%A0%90).jpeg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "기타식품판매업") {
        image = "https://sat02pap001files.storage.live.com/y4moRBw10JtRqea7wz1-opY2K-87ygKx6_15lm4E6vVhc3vhPbG0fNYYTD9epc_3Nyb2f_JSy4XYshIEIK0aXY0g5glTK6XllGUfGUf0cu_czyHxR3Vq8p6U-jY9fodgMaClVzGa2WH2sdYUQGAQbksd0QKhBZhoRk4XEnHal7eTwp13gQ6SpkMOf5JuzNX_wCz2CYgsYc-8EG0MTWzcjFjcw/%EA%B8%B0%ED%83%80%EC%8B%9D%ED%92%88%ED%8C%90%EB%A7%A4%EC%97%85.jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "김밥(도시락)") {
        image = "https://sat02pap001files.storage.live.com/y4ms9ewqBfg6P6KzXOBwenur4a1OAHRY702rywILCYeF549Et0gPNqdFLWjuoRWzr07WDSBjXI2OPrZTPGDUy8f3gD6hNd3pt-w_NrLNjLZ8-dRy2UIn-d2XV7lizgrEj6MAL6sY9eaZDd316_OswUfb-gHgHRoOH765EH1BLjfx5ROZQwHmM1LdO8i3PSdbb-vIzos76ColupoJl5l4OYNVA/%EA%B9%80%EB%B0%A5(%EB%8F%84%EC%8B%9C%EB%9D%BD).jpeg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "단란주점") {
        image = "https://sat02pap001files.storage.live.com/y4mh4K8hwvkJIGQ0f6ygqQS9YtqBaVsTpEwZMzXOxpBNm0EXviBwOBt7sXKt0mjvcaXmRubTFfN9a3YTtwy-l-UUICVF-y_pHI-nVjjTVm8_XJWJXXcJkazwo4j2cIKEpC_CnMKUdGvdcK7dh_bZx6-OPu7j_2fH4-ab0Y6SlPUfIDtfOgdAr9QWro9oIijCnlqSq2aQp-rpw46FqmPOKNxDQ/%EB%8B%A8%EB%9E%80%EC%A3%BC%EC%A0%90.jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "복어취급") {
        image = "https://sat02pap001files.storage.live.com/y4m4BnpHsbh60e86KuSEotPXx2CBcrGmrusxjeJDzHFuZa298oRbiNWp6xP7yMSf5ZPli-TvKUCZR3xWC-0LgZu-IlUPs8SxiqZvpRCDFC_3iiEgWg0UM8UdAv6GBZNdjHV_Z58ClIjm32V80C-vkND5JBLl5D24TcKCuBGDU3--7VL-8FAi5c-5tBXdy7hLJCON_bdXWbSWDcplDhO22eM8w/%EB%B3%B5%EC%96%B4%EC%B7%A8%EA%B8%89.jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "분식") {
        image = "https://sat02pap001files.storage.live.com/y4mxDmIuFV_Qb3CIKfV2Qnujbk8yYZyNJPbelB7ldn_YMojbrMraPKtekKit0qmn7tp0Gm0dfjMetIUYfUQ8fPhQXCJQ7lpRYiPk7jNElpHv3Ddro2JTFerC7ZF3orzOfbGMHQwUUma9WWRppA8iWgRUxXsEJnAXD2vpfqIOOM0b9EsD7-Jzk4QCkmorIezSh_eFgSvmO2UT-bvyvqsM9fNjw/%EB%B6%84%EC%8B%9D.jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "뷔페식") {
        image = "https://sat02pap001files.storage.live.com/y4mpQ39SE-cIXCgFNm6hvVDMhxO07-RR08UlZ39UkzYYvM1bjFmki3AMUJD5ZWxA8_scx1FD494MvhiYblnQVOCP_nuN_BiGFNKANau9ZT3t3Z-qQXDv80iiKcV-2IplbrbxTwnsFyCj3qv-S9DkGseVfyS6seR8Q0pWbLxk1f5z2LZCBFvJiyvje5dfjhe06AYeMxsq9WBfvCImub0-KKKDQ/%EB%B7%94%ED%8E%98%EC%8B%9D.jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "생선회") {
        image = "https://sat02pap001files.storage.live.com/y4mTDSPPV6UaAMwX5s7fI3faAe1u0ZEgf1nxQdB1vbBzvnIQKx-HVsPuEp0jz3o3ZzUGKCWu3XKoVyg8Aiw1-Q6UUWfxxNAbYsIHvCd421gtaVHNj5ptHNP1DO0RMMExnRaydJB2iQhcSZ2ThvOvREwl54Y4xNfb3YZSfW-3NTBBBvkPfrzuY1L2ALKPVqv6OYGASuN1UfqFE7BfSa_j48WFw/%EC%83%9D%EC%84%A0%ED%9A%8C.jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "식육취급") {
        image = "https://sat02pap001files.storage.live.com/y4mJz7Foydkv4Ny_7yZRmFsqsuLxz8k3p_5XWMCNGlykJHohmtJSDS7oGUtO1MrXlCJ1L5dpOA-slAaSN3TJFGnGhCElCqbnZ_8oXwJGQEQzsnjVtJmWuMXlojRHQOp1RFx0fXxyKoUoF4Mqd0ewLGWZxHDQsHLl8g4fjD9MjtM0MQPpoi617sHyWxoj-cAidnnMMJTEJArfTq06Bw2AGWY7Q/%EC%8B%9D%EC%9C%A1%EC%B7%A8%EA%B8%89.jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "식품제조가공업") {
        image = "https://sat02pap001files.storage.live.com/y4maRRXScgi0t8B0n8sZX4lbTVyyHPfS7t1ksSOKiNScOieF8VcdlOusJP1TOoa37oioamLGxaqSYWVgyB9M60_Eawvmdedq1Xv9gMtigxoauXCvuOc5Q14EQeVsS3pAXdIJcHxsreughdPNyT88owqdEdn98obW2uHKYLNnmR4Xsa7Oj3_DMC26LkZEP0tpeEzgDsFlkhgnVmRqB92K4efmw/%EC%8B%9D%ED%92%88%EC%A0%9C%EC%A1%B0%EA%B0%80%EA%B3%B5%EC%97%85.jpeg?psid=1&width=592&height=512"
    }


    if (isLoading) {
        return (
            <section>
                <Loading/>
            </section>
        )
    }

    return (
        <div className={classes.shopinfo}>
            <Link to="/shop">
                <button className={classes.backbtn}>지도로 돌아가기</button>
            </Link>
            <div><img src={image} alt="음식점 이미지 여기" className={classes.shopimage}/></div>
            <div className={classes.shopinfohead}>
                <div className={classes.nametype}>
                    <h2 className={classes.shopname}>{loadedShop.name}</h2>
                    <div className={classes.classification}>{loadedShop.foodClassific}</div>
                </div>
                <h1 className={classes.rate}>{Math.round(loadedShop.grade)}</h1>
            </div>
            <br></br>
            <div className={classes.line}></div>
            <div className={classes.location}>찾아오는 길</div>
            <div className={classes.address}>{loadedShop.address}</div>
            <div className={classes.line}></div>
            <NewReviewForm id={loadedShop.id}></NewReviewForm>
            <div className={classes.line}></div>
            <h4 className={classes.reviewhead}>리뷰 보기</h4>
            <ReviewList reviews={loadedReviews}></ReviewList>

        </div>
    )
}

export default ShopInfo;