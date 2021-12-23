import {useEffect, useState} from "react";
import ShopItem from "./ShopItem";
import ReviewList from "../review/ReviewList";
import {Link} from "react-router-dom";
import NewReviewForm from "../review/NewReviewForm";

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
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <div>
            <div>음식점 정보</div>
            <p>음식점 명 : {loadedShop.name}</p>
            <p>음식점 주소 : {loadedShop.address}</p>
            <p>음식점 분류 : {loadedShop.foodClassific}</p>
            <ReviewList reviews={loadedReviews}></ReviewList>
            <Link to="/shop"><button>뒤로가기</button></Link>
            <NewReviewForm id={loadedShop.id}></NewReviewForm>
        </div>
    )
}

export default ShopInfo;