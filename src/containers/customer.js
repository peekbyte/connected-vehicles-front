import React from "react";
import {WhiteSpace, Card} from "../components/base/misc";
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
