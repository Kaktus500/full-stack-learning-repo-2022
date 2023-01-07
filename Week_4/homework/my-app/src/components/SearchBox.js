import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { get_coordinates, get_weather } from "../functions/api_calls";
import { Navigate, useNavigate } from "react-router-dom";

export default function SearchBox(props) {
    const [local_city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(0);
    const [dataReceived, setDataReceived] = useState(false);
    const navigate = useNavigate();
    const textInputHandler = event => {
      setCity(event.target.value);
    };
    useEffect(() => {
      if(dataReceived === true){
        props.masterFunction[1](weatherData)
        setDataReceived(false)
        navigate("/debug")
      }
    },[dataReceived])
    function searchHandler() {
      let [city, state] = local_city.split(",",2).map((str) => str.trim())
      console.log(local_city)
      props.masterFunction[0](local_city)
      let lat = get_coordinates(city, "USA", state)
      console.log(lat)
      get_weather(30,-90,setDataReceived,setWeatherData)
    }
    return (
        <div className="flex-container">
            <div className="text-box">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Type in City and State"
                  className="mb-3"
                  onChange={textInputHandler}
                  value={local_city}
                >
                  <Form.Control
                    type="email"
                    placeholder="here you can type whatever you want, it has no effect"
                  />
                </FloatingLabel>
            </div>
            <div><Button variant="primary" onClick={() => searchHandler()}>Search</Button></div>
        </div>
    );
}