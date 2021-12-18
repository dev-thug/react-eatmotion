import classes from "./ShopList.module.css";
import ShopItem from "./ShopItem";


const DUMMY_DATA = [
    {
        name: "와시리",
        src: "../img/shopinfo1.jpg",
        date: "2021-12-25"
    },
    {
        name: "adsfasdf",
        src: "../img/shopinfo1.jpg",
        date: "2021-12-25"
    },
    {
        name: "sadfdf",
        src: "../img/shopinfo1.jpg",
        date: "2asdfasd2-25"
    },
    {
        name: "와시asdfasdf3",
        src: "../img/shopinfo1.jpg",
        date: "2021-12-25"
    },
    {
        name: "asdfasdfasdf",
        src: "../img/shopinfo1.jpg",
        date: "2021-12-25"
    },
]


const ShopList = (props) => {
    return (

        <div className={classes.shoplist_div}>
            <div id="content">
                <div className={classes.fixed_img_col}>
                    <ul>
                        {DUMMY_DATA.map(info =>
                            <ShopItem
                                name={info.name}
                                src={info.src}
                                date={info.date}

                            />)}

                        {/*<li><a href="/shopinfo">*/}
                        {/*<span className={classes.thumb}> */}
                        {/*<img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> */}
                        {/*<em>와시리</em></span>*/}
                        {/*    <strong>와시리</strong>*/}
                        {/*</a>*/}
                        {/*    <p>2021-12-25</p></li>*/}
                        {/*<li><a href="/shopinfo">*/}
                        {/*<span className={classes.thumb}> */}
                        {/*<img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> */}
                        {/*<em>와시리</em></span>*/}
                        {/*    <strong>와시리</strong>*/}
                        {/*</a>*/}
                        {/*    <p>2021-12-25</p></li>*/}
                        {/*<li><a href="/shopinfo">*/}
                        {/*<span className={classes.thumb}> */}
                        {/*<img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> */}
                        {/*<em>와시리</em></span>*/}
                        {/*    <strong>와시리</strong>*/}
                        {/*</a>*/}
                        {/*    <p>2021-12-25</p></li>*/}
                        {/*<li><a href="/shopinfo">*/}
                        {/*<span className={classes.thumb}> */}
                        {/*<img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> */}
                        {/*<em>와시리</em></span>*/}
                        {/*    <strong>와시리</strong>*/}
                        {/*</a>*/}
                        {/*    <p>2021-12-25</p></li>*/}
                        {/*<li><a href="/shopinfo">*/}
                        {/*<span className={classes.thumb}> */}
                        {/*<img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> */}
                        {/*<em>와시리</em></span>*/}
                        {/*    <strong>와시리</strong>*/}
                        {/*</a>*/}
                        {/*    <p>2021-12-25</p></li>*/}
                        {/*<li><a href="/shopinfo">*/}
                        {/*<span className={classes.thumb}> */}
                        {/*<img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> */}
                        {/*<em>와시리</em></span>*/}
                        {/*    <strong>와시리</strong>*/}
                        {/*</a>*/}
                        {/*    <p>2021-12-25</p></li>*/}
                        {/*<li><a href="/shopinfo">*/}
                        {/*<span className={classes.thumb}> */}
                        {/*<img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> */}
                        {/*<em>와시리</em></span>*/}
                        {/*    <strong>와시리</strong>*/}
                        {/*</a>*/}
                        {/*    <p>2021-12-25</p></li>*/}

                    </ul>

                    <p className={classes.paragraph}>페이지</p>
                </div>


            </div>
        </div>

    )
}

export default ShopList;