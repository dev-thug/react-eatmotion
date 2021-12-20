import ShopList from "../../components/shop/ShopList";
import {useEffect, useState} from "react";

const Shop = () => {

    let latitude = 0;
    let longitude = 0;
    navigator.geolocation.getCurrentPosition(pos => {
        latitude = pos.coords.latitude; //y
        longitude = pos.coords.longitude; //x
        console.log("현재 위치는 :  Y(" + latitude + ") , X(" + longitude)
    })

    const [isLoading, setIsLoading] = useState(true);
    const [loadedShops, setLoadedShops] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://hayagou.shop/api/shop/gps?userX="+longitude+"&userY="+latitude+"&distance=5")
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                setIsLoading(false);
                setLoadedShops(data);

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
            <h1> ShopPage 입니다.</h1>
            <ShopList shops={loadedShops}/>
        </div>
    )

}

export default Shop;