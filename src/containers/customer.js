import React, { useState, useEffect, useContext } from "react";
import { format as fnsFormat, parse as fnsParse } from "date-fns";
import {WhiteSpace, Card, CardItem, CardItemRow } from "../components/base/misc";
import { Button, Input } from "../components/base/forms";
import api from "../api/api";
import vihicleImage from '../images/vihicleImage.png'
const Home = () => {
  const name = useInputForm("");

  useDocumentTitle(name.value);
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
};

const useInputForm = (initialValue, callback) => {
  const [value, setValue] = useState(initialValue);

  function onChange(e) {
    setValue(e.target.value);
    callback();
  }
  return { value, onChange };
};

const useWindowWith = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
};

const useDocumentTitle = value => {
  useEffect(() => {
    document.title = value;
  });
};

const useFetch = method => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const res = await api[method]();
      setResult(res.data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return { result, loading };
};

export default Home;
