import classes from "./Shop.module.css";
import ShopItem from "./ShopItem";

const ShopList = (props) => {
  return (
    <div >
        <ul className={classes['shop-list']} style={{height:"800px"}}>
          {props.shops.map((shop) => (
            <ShopItem key={shop.id} id={shop.id} name={shop.name} address={shop.address} />
          ))}
        </ul>
    </div>
  );
};

export default ShopList;
