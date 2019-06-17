import React from "react";
import {WhiteSpace, Card, CardItem, CardItemRow } from "../components/base/misc";
import vihicleImage from '../images/vihicleImage.png'
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div  >
        <div className="header">
          <h1 className="header__title"> Connected Vehicles</h1>
        </div>
        <div className="container">
          <Card title="Customer Information">

          </Card>
          <WhiteSpace />

          <Card title="Vehicles">
            <CardItem>
              <img style={{width:'100px'}} src={vihicleImage} />
              <CardItemRow label="VIN" value="YS2R4X9401"></CardItemRow>
              <CardItemRow label="Reg No" value="Johans Bulk AB"></CardItemRow>
              <CardItemRow label="Customer" value="YS2R4X9401"></CardItemRow>
              <CardItemRow label="Status" status="disconnected" value="Connected"></CardItemRow>
            </CardItem>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
