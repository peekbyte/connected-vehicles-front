import React, { useState, useEffect, useContext } from "react";
import { format as fnsFormat, parse as fnsParse } from "date-fns";
import { Menu, Table, WhiteSpace, Card, CardItem, CardItemRow } from "../components/base/misc";
import { Button, Input } from "../components/base/forms";
import api from "../api/api";
import vihicleImage from '../images/vihicleImage.png'

const Home = () => {
  const name = useInputForm("", ()=>{
  });
 
  useDocumentTitle(name.value);
  let vehicles = useFetch("getVehicles");

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
            {...name}
            placeholder="Enter custoemr name for filter"
          />
        
          <WhiteSpace />
          <WhiteSpace />
          <Button label="Clear Filter">Clear Filter</Button>
        </Card>
        <WhiteSpace />
        {/* <Table /> */}

        <Card title="Result">
          {vehicles.result.map((item, index) => (          
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
};

const useInputForm = (initialValue, callback) => {
  const [value, setValue] = useState(initialValue);

  function onChange(e) {
    setValue(e.target.value);
    callback && callback();
  }
  return { value, onChange };
};



const useDocumentTitle = value => {
  useEffect(() => {
    document.title = value;
  });
};

const useFetch = (method, args) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const res = await api[method]();
      setResult(res.data.result);
      setLoading(false);
    }
    fetchData();
  }, []);
  return { result, loading };
};

export default Home;
