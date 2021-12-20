import classes from "./ShopList.module.css";
import ShopItem from "./ShopItem";


const DUMMY_DATA = [
    {
        id: 1,
        name: "와시리",
        src: "../img/shopinfo1.jpg",
        date: "2021-12-25"
    },
    {
        id: 2,
        name: "adsfasdf",
        src: "../img/shopinfo1.jpg",
        date: "2021-12-25"
    },
    {
        id: 3,
        name: "sadfdf",
        src: "../img/shopinfo1.jpg",
        date: "2asdfasd2-25"
    },
    {
        id: 4,
        name: "와시asdfasdf3",
        src: "../img/shopinfo1.jpg",
        date: "2021-12-25"
    },
    {
        id: 5,
        name: "asdfasdfasdf",
        src: "../img/shopinfo1.jpg",
        date: "2021-12-25"
    },
]


const ShopList = (props) => {
    return (
                <div>
                    <ul>
                        {props.shops.map(shop =>
                            <ShopItem
                                key={shop.id}
                                id={shop.id}
                                name={shop.name}
                                address={shop.address}

                            />)}


                    </ul>

                    <p >페이지</p>
                </div>




    )
}

export default ShopList;