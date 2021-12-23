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
import {Link} from "react-router-dom";

function ShopItem(props) {

    const url = "/newreserve/"+props.id

    console.log(props.id)
    return (
        // #ffcc66
        <div className={classes["shop-item"]} key={props.key}>
            <Row>
                {/* <p>{props.id}</p> */}
                <Col md="9">
                    <strong>{props.name}</strong>
                    <p>{props.address}</p>
                </Col>
                <Col md="3">
                    {/* <a href="/reserve-make">예약&nbsp;&nbsp;&nbsp;</a> */}
                    <Link to={url}><Button color="warning">예약&nbsp;&nbsp;&nbsp;</Button></Link>
                </Col>
            </Row>
        </div>
    );
}

export default ShopItem;
