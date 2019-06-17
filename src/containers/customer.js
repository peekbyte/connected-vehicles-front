import React from "react";
import {WhiteSpace, Card, CardItem, CardItemRow } from "../components/base/misc";
import vihicleImage from '../images/vihicleImage.png'
class Home extends React.Component {


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

        </div>
      </div>
    );
  }
}

export default Home;
