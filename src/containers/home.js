import React, { useState, useEffect, useContext } from "react";
import { format as fnsFormat, parse as fnsParse } from "date-fns";
import { WhiteSpace, Card, CardItem, CardItemRow } from "../components/base/misc";
import { Button, Input, Select } from "../components/base/forms";
import api from "../api/api";
import vihicleImage from '../images/vihicleImage.png'
import { string } from "postcss-selector-parser";
import { timingSafeEqual } from "crypto";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchValue: "", searchResult : [], loading : false}
  }

  componentDidMount(){
     this.loadData()
  }

  loadData = async() =>{
    this.setState({loading: true})
    try{
      const result = await api.getVehicles(this.state.searchValue, this.state.searchStatus)
      this.setState({searchResult: result.data.result, loading: false})
    }
    catch(error){
      this.setState({error: String(error), loading: false})
    } 
  } 

  handleSearchValueChange = (e) =>{
    const {name, value} = e.target;
    this.setState({[name]: value}, () => this.loadData())
    
  }
  handleClearFilter = (e) =>{
    this.setState({searchValue: ""}, () => this.loadData())
    
  }

  render() {


    return (
      <div  >
        <div className="header">
          <h1 className="header__title"> Connected Vehicles</h1>
        </div>

        <div className="container">
          <Card title="Search Box">


            <WhiteSpace />
            <Input
              title="Search"
              name="searchValue"
              value={this.state.searchValue}
              onChange={this.handleSearchValueChange}
              placeholder="Enter custoemr name for filter"
            />
          
            <WhiteSpace />
            <Select data={[{value: 'all', label: 'All'}, {value: 'connected', label: 'Connected'}, {value: 'disconnected', label: 'Disconnected'}]} title="Status"
              name="searchStatus" 
              value={this.state.searchStatus}
              onChange={this.handleSearchValueChange}
              ></Select>
            <WhiteSpace />
            <Button label="Clear Filter" onClick={this.handleClearFilter}>Clear Filter</Button>
          </Card>
          <WhiteSpace />
          {/* <Table /> */}

          <Card title="Result">
            {this.state.loading && <div>... Loading</div>}
            {this.state.searchResult.map((item, index) => (          
              <CardItem key={index} >
              <img style={{width:'100px'}} src={vihicleImage} />
              <CardItemRow label="VIN" value={item.vehicleId}></CardItemRow>
              <CardItemRow label="Reg No" value={item.regNumber} ></CardItemRow>
              <CardItemRow label="Customer" value={item.name} link="/customer/3"></CardItemRow>
              <CardItemRow label="Status" status="disconnected" value="Connected"></CardItemRow>
            </CardItem>      
          ))}
         </Card>
        </div>
      </div>
    );
  }
}

export default Home;
