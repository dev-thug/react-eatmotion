import React from "react";
import { NaverMap, loadNavermapsScript, Marker } from "react-naver-maps";
import Loadable from "react-loadable";

class NaverMappView extends React.Component {
  constructor(props) {
    super(props);

    const { navermaps } = props;
    this.shops = props.shops;
    this.state = {
      zoom: 16,
      // center: new navermaps.LatLng(37.566018, 127.036464),
      center: new navermaps.LatLng(props.x, props.y),
    };

    this.handleCenterChanged = this.handleCenterChanged.bind(this);
    this.handleZoomChanged = this.handleZoomChanged.bind(this);
    this.onClickMarker = this.onClickMarker.bind(this);
  }
  handleZoomChanged(zoom) {
    this.setState({ zoom });
  }

  handleCenterChanged(center) {
    const { navermaps } = this.props;
    this.setState({ center });
  }
  onClickMarker(shop){
    const navermaps = window.naver.maps;
    this.setState(() => ({
      // center: new navermaps.LatLng(37.5070447,126.8877355),
      center: new navermaps.LatLng(shop.y,shop.x),
    }));
    // console.log(x,y);
    alert(shop.name);
  }

  render() {
    const { center, zoom } = this.state;
    const { navermaps } = this.props;

    return (
        <div>
          <NaverMap
              style={{ width: '100%', height: '85vh' }}
              zoom={zoom}
              onZoomChanged={this.handleZoomChanged}
              center={center}
              onCenterChanged={this.handleCenterChanged}
          >
            {this.shops.map((shop) => (
                <Marker
                    key={shop.id}
                    // 팔보면옥
                    // position={new navermaps.LatLng(37.5070447,126.8877355)}
                    position={new navermaps.LatLng(shop.y,shop.x)}
                    animation={2}
                    // onClick={this.onClickMarker.bind(this,shop.y,shop.x)}
                    onClick={this.onClickMarker.bind(this,shop)}
                />
            ))}
          </NaverMap>
        </div>
    );
  }
}
const CLIENT_ID = "5eu50cwdvd";

// use react-loadable component
const NavermapsLoadableComponent = Loadable({
  loader() {
    return loadNavermapsScript({ ncpClientId: CLIENT_ID });
  },

  render(navermaps, props) {
    return (
        <NaverMappView navermaps={navermaps} {...props} shops={props.shops} x={props.x} y={props.y}/>
    );
  },

  loading(props) {
    if (props.error) {
      return <div>Error!</div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
  },
});
const ShopMap = (props) => {
  return (
      <div>
        <NavermapsLoadableComponent shops={props.shops} x={props.x} y={props.y} />
      </div>
  );
};

export default ShopMap;
