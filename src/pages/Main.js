import classes from "./Main.module.css";

const Main = () => {
return (
    <div>
        <div className={classes.home_event}>
		<div className={classes.slide}>

			<input type="radio" name="pos" id="pos1" checked/> 
			<input type="radio" name="pos" id="pos2"/>
			<input type="radio" name="pos" id="pos3"/>
			<input type="radio" name="pos" id="pos4"/>
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<p className={classes.pos}>
				<label for="pos1"></label> <label for="pos2"></label> <label
					for="pos3"></label> <label for="pos4"></label>
			</p>
		</div>
	</div>
	<div className={classes.line_10}></div>

	<div className={classes.shoplist_div}>

		<div className={classes.content}>

			<h1 className={classes.hansans}>#요즘 뜨는 맛집</h1>

			<div className={classes.fixed_img_col}>
				<ul>
					<li><a href="#"> <span className={classes.thumb}> <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> <em>와시리</em></span>
							<strong>와시리</strong>
					</a>
						<p>왕십리역</p></li>
					<li><a href="#"> <span className={classes.thumb}> <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> <em>와시리</em></span>
							<strong>와시리</strong>
					</a>
						<p>왕십리역</p></li>
					<li><a href="#"> <span className={classes.thumb}> <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> <em>와시리</em></span>
							<strong>와시리</strong>
					</a>
						<p>왕십리역</p></li>
					<li><a href="#"> <span className={classes.thumb}> <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> <em>와시리</em></span>
							<strong>와시리</strong>
					</a>
						<p>왕십리역</p></li>
					<li><a href="#"> <span className={classes.thumb}> <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> <em>와시리</em></span>
							<strong>와시리</strong>
					</a>
						<p>왕십리역</p></li>
					<li><a href="#"> <span className={classes.thumb}> <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> <em>와시리</em></span>
							<strong>와시리</strong>
					</a>
						<p>왕십리역</p></li>
					<li><a href="#"> <span className={classes.thumb}> <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> <em>와시리</em></span>
							<strong>와시리</strong>
					</a>
						<p>왕십리역</p></li>
					<li><a href="#"> <span className={classes.thumb}> <img src="../img/shopinfo1.jpg" alt="shopinfo.html"/> <em>와시리</em></span>
							<strong>와시리</strong>
					</a>
						<p>왕십리역</p></li>
				</ul>
				<p className={classes.paragraph}>페이지</p>
			</div>


		</div>
	</div>

    </div>
)
}

export default Main;