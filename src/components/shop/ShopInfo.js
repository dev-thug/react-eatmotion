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
    }else if(loadedShop.foodClassific === "패스트푸드"){
        image = "https://sat02pap001files.storage.live.com/y4mzspFMZ1zyhTrrY2JEShm9V9Q8R2yzrfeMaLiOw0rc0rl11M9XdaKDyAPAeeaqT8JFMCUMkVgwS8PF3ghgzgF6O1CjRhG06ameXLBwmyspi5X13YbxCdgdEAzLMkQlRpBP4IV_ARGHqTzFRzXgzOtTqzA61yjA-ebRL-pGHMlF7RyqxNSheQqB-mPmJ_GmHKKGjCAt6L6qYwBe31ABJbf3A/%ED%8C%A8%EC%8A%A4%ED%8A%B8%ED%91%B8%EB%93%9C.jpg?psid=1&width=1087&height=815"
    }else if(loadedShop.foodClassific === "호프(소주방)"){
        image = "https://sat02pap001files.storage.live.com/y4m326YYnCVrrZasi-IZFT6jgkdOIL8nIDhicEi1Z5dSKBqOTTUOPhS5O4RCNNsgiDTlqfOp8jalqGOKam62ZqbIZ7PtzjCQOrreIF5eMcZZkIm0ZwuGy_ZuTMhpzcSIYiMb9Yd1hH4OYSBeZYAdTZdC3ADz0xpI1gc0CvGdd7jusHZlrHVW9Jm_4OtUvcsDIJZEgy4MxnLot8U-H0k40CAWQ/%ED%98%B8%ED%94%84(%EC%86%8C%EC%A3%BC%EB%B0%A9).jpeg?psid=1&width=1040&height=585"
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