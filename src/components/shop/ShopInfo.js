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

            <a href="/make-reserve">예약하기(임시용)&nbsp;&nbsp;&nbsp;</a>

        </li>
        // <div className={classes.body_shopInfo}>
        //
        //      <div className={classes.shoppic_back}>
        //         <div className={classes.shoppic_div}>
        //             <article className={classes.shoppic_art}>
        //                 <img className={classes.shoppic} src="./img/shopmain.jpg"/>
        //             </article>
        //             <article className={classes.shoppic_art}>
        //                 <img className={classes.shoppic} src="../img/shopinfo1.jpg"/>
        //             </article>
        //             <article className={classes.shoppic_art}>
        //                 <img className={classes.shoppic} src="../img/shopinfo2.jpg"/>
        //             </article>
        //             <article className={classes.shoppic_art}>
        //                 <img className={classes.shoppic} src="../img/shopinfo3.jpg"/>
        //             </article>
        //             <article className={classes.shoppic_art}>
        //                 <img className={classes.shoppic} src="../img/shopinfo4.jpg"/>
        //             </article>
        //
        //         </div>
        //     </div>
        //     <div className={classes.shopinfo_div}>
        //         <div className={classes.shopinfo_sub}>
        //             <span className={classes.sub_a}>와시리</span><span className={classes.sub_rate}>4.7</span>
        //             <p className={classes.sub_b}>왕십리</p>
        //         </div>
        //         <br/>
        //         <div>지도넣는곳</div>
        //         {/*<div class="shopinfo_map">
        // 	        <div id="map" style="width: 100%; height: 400px;"></div>
        //
        // 	            <script type="text/javascript">
        // 		            const mapOptions = {
        // 			            center : new naver.maps.LatLng(37.566502, 127.039444),
        // 			            zoom : 18
        // 	            	    };
        //
        // 		            const map = new naver.maps.Map('map', mapOptions);
        //
        // 		            const marker = new naver.maps.Marker({
        // 			            position : new naver.maps.LatLng(37.566502, 127.039444),
        // 			            map : map,
        // 		        	    icon : {
        // 				            url : '../img/cat.png',
        // 				            size : new naver.maps.Size(50, 52),
        // 				            origin : new naver.maps.Point(0, 0),
        // 				            anchor : new naver.maps.Point(0, 0)
        // 			            }
        // 		            });
        // 	            </script>
        //         </div>>*/}
        //         <div className={classes.shopinfo_add}>
        //             <p>도로명</p>
        //             <p>서울 성동구 무학봉28길 9 1층 와시리</p>
        //             <br/>
        //             <p>지번</p>
        //             <p>서울 성동구 하왕십리동 966-16 1층 와시리 (우편번호 04715)</p>
        //         </div>
        //         <br/>
        //         <div className={classes.shopinfo_add}>
        //             <input type="image" src="../img/phone.png" width="13px"/><a>0507-1417-0518</a>
        //         </div>
        //
        //         <div>
        //             <br/> 왕십리 술집 와시리입니다.<br/> 모듬사시미와 여러가지 안주가 있는,<br/> 일식,양식
        //             요리주점입니다!
        //         </div>
        //         <br/>
        //         <div>
        //             월요일 17:00 - 01:00<br/> 화요일 17:00 - 01:00<br/> 수요일 17:00 -
        //             01:00<br/> 목요일 17:00 - 01:00<br/> 금요일 17:00 - 01:00<br/>
        //             토요일 17:00 - 01:00<br/> 일요일 휴무
        //         </div>
        //         <br/>
        //         <div className={classes.shopinfo_add}>
        //             <p className={classes.h2}>메뉴</p>
        //         </div>
        //         <div className={classes.shopinfo_menu}></div>
        //
        //         <div className={classes.shopinfo_add}>
        //             <p className={classes.h2}>리뷰</p>
        //         </div>
        //         리뷰<br/>리뷰<br/>리뷰<br/>리뷰<br/>리뷰<br/>리뷰<br/>리뷰<br/>
        //
        //
        //
        //     </div>
        // </div>
    )
}

export default ShopInfo;