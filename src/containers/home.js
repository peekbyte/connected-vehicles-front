import React from "react";
import { WhiteSpace, Card, CardItem, CardItemRow } from "../components/base/misc";
import { Button, Input, Select } from "../components/base/forms";
import api from "../api/api";
import vihicleImage from '../images/vihicleImage.png'
import loadingGift from '../images/Gear-1s-200px.gif'
import loadingListGift from '../images/loading.gif'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchValue: "",searchStatus: "all", searchResult : [], loading : false, loadingSimulator:false, error: ""}
  }

  componentDidMount(){
     this.loadData()
  }

  loadData = async() =>{
    this.setState({loading: true, searchResult : []})
    try{
      const result = await api.getVehicles(this.state.searchValue, this.state.searchStatus)
      this.setState({searchResult: result.data.result, loading: false})
    }
    catch(error){
      this.setState({error: String(error), loading: false})
      alert(String(error))
    } 
  } 

  handleSearchValueChange = (e) =>{
    const {name, value} = e.target;
    this.setState({[name]: value}, () => this.loadData())
    
  }
  handlerunSimulator = async(e) =>{
    const {searchResult} = this.state
    if(searchResult.length === 0)
      return;

    this.setState({loadingSimulator: true, searchValue: "", searchStatus: "all"})
   

    try{
      
      for(let i = 0; i < searchResult.length / 2; ++ i){
        const index = Math.floor(Math.random() * searchResult.length)
        await api.vehicleConnect(searchResult[index].vehicleId)
      }
      this.setState({loadingSimulator: false}, () => this.loadData())    
    }
    catch(error){
      this.setState({error: String(error), loadingSimulator: false})
      alert(String(error))
    }
  }
  handleClearFilter = (e) =>{
    this.setState({searchValue: "", searchStatus: "all"}, () => this.loadData())
    
  }

  render() {
    return (
      <div  >
        <div className="header">
          <h1 className="header__title"> Connected Vehicles</h1>
        </div>

        <div className="container">
        <Button className="button--simulator" label="Run Simulator" onClick={this.handlerunSimulator}>
         {this.state.loadingSimulator ? <img style={{width: '43px'}} src={loadingGift}></img> : 'Run Simulator'} 
          
          </Button>
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
           {(this.state.searchValue || this.state.searchStatus !== 'all')   && <Button label="Clear Filter" onClick={this.handleClearFilter}>Clear Filter</Button>}  
          </Card>
          
          <WhiteSpace />

          <Card title="Result">
            {this.state.loading && <img style={{margin: "27px auto"}} src={loadingListGift} alt="... Loading"></img>}
            {this.state.searchResult.map((item, index) => (          
              <CardItem key={index} >
              <img alt="Connected Vehicles" style={{width:'100px'}} src={vihicleImage} />
              <CardItemRow label="VIN" value={item.vehicleId}></CardItemRow>
              <CardItemRow label="Reg No" value={item.regNumber} ></CardItemRow>
              <CardItemRow label="Customer" value={item.name} link="/customer/3"></CardItemRow>
              <CardItemRow label="Status" status={item.isConnected ? "connected" : "disconnected"} value={item.isConnected ? "Connected" : "Disconnected"}></CardItemRow>
            </CardItem>      
          ))}
         </Card>
        </div>
      </div>
    );
  }
}

export default Home;
