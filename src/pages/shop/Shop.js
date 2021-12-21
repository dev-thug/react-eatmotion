import ShopList from "../../components/shop/ShopList";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
// import PanelHeader from "components/PanelHeader/PanelHeader.js";
// import { thead, tbody } from "variables/general";

const Shop = () => {
  let latitude = 0;
  let longitude = 0;
  navigator.geolocation.getCurrentPosition((pos) => {
    latitude = pos.coords.latitude; //y
    longitude = pos.coords.longitude; //x
    console.log("현재 위치는 :  Y(" + latitude + ") , X(" + longitude);
  });

  const [isLoading, setIsLoading] = useState(true);
  const [loadedShops, setLoadedShops] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "/api/shop/gps?userX=" +
        longitude +
        "&userY=" +
        latitude +
        "&distance=5"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setLoadedShops(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div >
      {/* <h1> ShopPage 입니다.</h1> */}
      <div className="content" >
        <Row >
          <Col xs={12} >
            <Card>
              <Row >
                <Col md="4" >
                  {/* 맛집 리스트 */}
                  <ShopList shops={loadedShops} />
                </Col>
                <Col md="8">{/* 맵 부분 */}</Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Shop;
