import classes from "./Footer.module.css"



const Footer = () => {
    return (
        <footer>
		<div className={classes.footer_div}>
			<p className={classes.e}>Eatmotion</p>
			<p>Team. 맛집을 구해조</p>
			<a> Phone: +82) 10-1234-5678</a> <a className={classes.settle}>|</a> <a>Email: MCL1@multicampus.com</a>
		</div>
		<div className={classes.footer_bottom_div}>Eatmotion 2021 APP | Project of 맛집을 구해조</div>
	</footer>
    )

}

export default Footer;