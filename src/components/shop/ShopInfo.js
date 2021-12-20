import classes from "./ShopInfo.module.css";

const ShopInfo = (props) => {
    return (
        <li><a href="/shopinfo">
                        <span className={classes.thumb}>
                        <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/>
                        <em>와시리</em></span>
            <strong>와시리</strong>
        </a>
            <p>2021-12-25</p>
        </li>
    )
}

export default ShopInfo;