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

function ShopItem(props) {
  return (
    // #ffcc66
    <div className={classes["shop-item"]}>
      <Row>
          {/* <p>{props.id}</p> */}
          <Col md="8">
            <strong>{props.name}</strong>
            <p>{props.address}</p>
          </Col>
          <Col md="3">
            {/* <a href="/reserve-make">예약&nbsp;&nbsp;&nbsp;</a> */}
            <Button color="warning">예약&nbsp;&nbsp;&nbsp;</Button>
          </Col>
      </Row>
    </div>
  );
}

export default ShopItem;
