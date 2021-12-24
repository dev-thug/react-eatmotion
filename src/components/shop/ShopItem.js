import classes from "./Shop.module.css";

import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    Row,
    Col,
    Button,
} from "reactstrap";
import {Link, useHistory} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../../store/auth-context";


function ShopItem(props) {
    const history = useHistory();
    const url = "/newreserve/" + props.id
    const shopInfo = "/shop-info/" + props.id;
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const clickHandler = () => {

        history.replace(shopInfo)

    }

    console.log(props.id)
    return (
        // #ffcc66
        <div className={classes["shop-item"]} key={props.key}>
            <Row>
                {/* <p>{props.id}</p> */}
                <Col md="9" onClick={clickHandler}>
                    <strong>{props.name}</strong>
                    <p>{props.address}</p>
                    <p>평점 {Math.round(props.grade)}</p>
                </Col>
                <Col md="3">
                    {/* <a href="/reserve-make">예약&nbsp;&nbsp;&nbsp;</a> */}
                    {isLoggedIn && (
                        <Link to={url}><Button color="warning">예약&nbsp;&nbsp;&nbsp;</Button></Link>
                    )}
                </Col>
            </Row>
        </div>
    );
}

export default ShopItem;
