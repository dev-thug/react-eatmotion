import classes from "./Shoplist.module.css";

const Shoplist = (props) => {
    return (
        
        <div className={classes.shoplist_div}>
        <div id="content">
            <div className={classes.fixed_img_col}>
                <ul>
                    <li><a href="/shopinfo"> 
                        <span className={classes.thumb}> 
                        <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> 
                        <em>와시리</em></span>
                        <strong>와시리</strong>
                    </a>
                        <p>2021-12-25</p></li>
                    <li><a href="/shopinfo"> 
                        <span className={classes.thumb}> 
                        <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> 
                        <em>와시리</em></span>
                        <strong>와시리</strong>
                    </a>
                        <p>2021-12-25</p></li>
                    <li><a href="/shopinfo"> 
                        <span className={classes.thumb}> 
                        <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> 
                        <em>와시리</em></span>
                        <strong>와시리</strong>
                    </a>
                        <p>2021-12-25</p></li>
                    <li><a href="/shopinfo"> 
                        <span className={classes.thumb}> 
                        <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> 
                        <em>와시리</em></span>
                        <strong>와시리</strong>
                    </a>
                        <p>2021-12-25</p></li>
                    <li><a href="/shopinfo"> 
                        <span className={classes.thumb}> 
                        <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> 
                        <em>와시리</em></span>
                        <strong>와시리</strong>
                    </a>
                        <p>2021-12-25</p></li>
                    <li><a href="/shopinfo"> 
                        <span className={classes.thumb}> 
                        <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> 
                        <em>와시리</em></span>
                        <strong>와시리</strong>
                    </a>
                        <p>2021-12-25</p></li>
                    <li><a href="/shopinfo"> 
                        <span className={classes.thumb}> 
                        <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> 
                        <em>와시리</em></span>
                        <strong>와시리</strong>
                    </a>
                        <p>2021-12-25</p></li>
                    
                </ul>

                <p className={classes.paragraph}>페이지</p>
            </div>


            </div>
        </div>
        
    )
}

export default Shoplist;