import React from "react";
import { NaverMap, loadNavermapsScript, Marker } from "react-naver-maps";

import { withNavermaps } from "react-naver-maps/hocs";
import Loadable from "react-loadable";

class NaverMappView extends React.Component {
  constructor(props) {
    super(props);

    const { navermaps } = props;
    this.shops = props.shops;
    this.state = {
      zoom: 13,
      center: new navermaps.LatLng(37.554722, 126.970833),
    };

    this.handleCenterChanged = this.handleCenterChanged.bind(this);
    this.handleZoomChanged = this.handleZoomChanged.bind(this);
    // this.onClickButton = this.onClickButton.bind(this);
    this.onClickMarker = this.onClickMarker.bind(this);
  }

  handleZoomChanged(zoom) {
    this.setState({ zoom });
  }

  handleCenterChanged(center) {
    const { navermaps } = this.props;
    this.setState({ center });
  }
  onClickMarker(){
    const navermaps = window.naver.maps;
    this.setState(() => ({
      center: new navermaps.LatLng(37.5070447,126.8877355),
    }));

  }
  // onClickMarker() {
  //   const navermaps = window.naver.maps;
  //   this.setState(() => ({
  //     center: new navermaps.LatLng(37.554722, 126.970833),
  //   }));
  // }

  render() {
    const { center, zoom } = this.state;
    const { navermaps } = this.props;

    return (
      // <div id ="zxc" style={{ width: "100%", height: "100%" }}>
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
              position={new navermaps.LatLng(37.5070447,126.8877355)}
              animation={2}
              onClick={(shop) => this.onClickMarker(shop)}
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
      <NaverMappView navermaps={navermaps} {...props} shops={props.shops} />
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
      <NavermapsLoadableComponent shops={props.shops} />
    </div>
  );
};

export default ShopMap;

// // const ShopMap = (props) => {
// //   const navermaps = window.naver.maps;

// //   return (
// //     <NaverMap
// //       mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
// //       style={{
// //         width: "100%", // 네이버지도 가로 길이
// //         height: "85vh", // 네이버지도 세로 길이
// //       }}
// //       defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
// //       defaultZoom={13} // 지도 초기 확대 배율
// //     ></NaverMap>
// //   );
// // };

// {
//   /* <RenderAfterNavermapsLoaded
// ncpClientId={'5eu50cwdvd'} // 자신의 네이버 계정에서 발급받은 Client ID
// error={<p>Maps Load Error</p>}
// loading={<p>Maps Loading...</p>}
// ></RenderAfterNavermapsLoaded> */
// }
