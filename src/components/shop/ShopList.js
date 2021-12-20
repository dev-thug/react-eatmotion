import classes from "./Shop.module.css";
import ShopItem from "./ShopItem";

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