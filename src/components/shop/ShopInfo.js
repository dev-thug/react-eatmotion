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


    if (isLoading) {
        return (
            <section>
                <Loading/>
            </section>
        )
    }

    return (
        <div className={classes.shopinfo}>
            <Link to="/shop"><button className={classes.backbtn}>지도로 돌아가기</button></Link>
            <div className={classes.shopimage}>음식점 이미지 여기</div>
            <div className={classes.shopinfohead}>
                <div className={classes.nametype}>
                    <h2 className={classes.shopname}>{loadedShop.name}</h2>
                    <div className={classes.classification}>{loadedShop.foodClassific}</div>
                </div>
                <h1 className={classes.rate}>평점</h1>
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