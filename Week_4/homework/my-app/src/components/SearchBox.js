import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { get_coordinates, get_weather, get_current_weather, get_air_quality } from "../functions/api_calls";
import { Navigate, useNavigate } from "react-router-dom";

export default function SearchBox(props) {
    const [local_city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(0)
    const [dataReceived, setDataReceived] = useState(false)
    const [geoCity, setGeoCity] = useState(0)
    const [timeZone, setTimeZone] = useState(0)
    let coords = [0,0];
    const navigate = useNavigate();
    const textInputHandler = event => {
      setCity(event.target.value);
    };
    useEffect(() => {
      console.log(geoCity)
      setCity(geoCity["name"])
    }, [geoCity])
    useEffect(() => {
      if(geoCity["lon"] !== undefined && geoCity["lat"] !== undefined && geoCity !== null){ 
      //console.log(local_city)
      props.masterFunction[0](geoCity["name"])
      console.log(geoCity["lon"], geoCity["lat"])
      get_current_weather(geoCity["lon"],geoCity["lat"],props.masterFunction[3])
      get_air_quality(geoCity["lon"],geoCity["lat"],props.masterFunction[4])
      get_weather(geoCity["lon"],geoCity["lat"],setDataReceived,setWeatherData,setTimeZone)
      }
    }, [geoCity])
    useEffect(() => {
      // reload previous search query to renew weatherData after reloading page
      if(window.localStorage.getItem("location") !== null && window.location.pathname !== "/"){
        let retrievedData = window.localStorage.getItem("location")
        console.log(JSON.parse(retrievedData))
        setGeoCity(JSON.parse(retrievedData))
      }
    },[])
    useEffect(() => {
      console.log("Time Zone", timeZone)
      if(dataReceived === true){
        // reduce the amount of weather data that is actually portraied, since only 5 days should be portraied
        // TODO: This might be a bit reductive, would be better to do some kind of averaging/checking for rain etc.
        let reducedWeatherData = []
        let min_temp = +Infinity
        let max_temp = -Infinity
        weatherData.map((item,index) => {
          let dt = item["dt_txt"]
          let time = Number(dt.split(" ")[1].split(":")[0])
          ;(item["main"]["temp"] < min_temp) ? min_temp = item["main"]["temp"] : min_temp=min_temp
          ;(item["main"]["temp"] > max_temp) ? max_temp = item["main"]["temp"] : max_temp=max_temp
          if((time+timeZone)-((time+timeZone)%3) === 12){ // always use noon as reference for icon
            reducedWeatherData.push({"temp_max": Math.round(max_temp), "temp_min": Math.round(min_temp), "date": item["dt_txt"], "icon": item["weather"][0]["icon"]})
            min_temp = +Infinity
            max_temp = -Infinity
          }
        })
        props.masterFunction[1](reducedWeatherData)
        props.masterFunction[2](timeZone)
        setDataReceived(false)
        console.log(geoCity)
        window.localStorage.setItem("location", JSON.stringify(geoCity))
        console.log(window.location.pathname)
        navigate("/debug")
      }
    },[dataReceived])
    function searchHandler() {
      let [city, state] = local_city.split(",",2).map((str) => str.trim())
      console.log(local_city)
      props.masterFunction[0](local_city)
      get_coordinates(city, "USA", setGeoCity, state)
      //get_weather(geoCity["lon"],geoCity["lat"],setDataReceived,setWeatherData)
    }
    return (
        <div className="flex-container" id="search-page">
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
            <Button variant="primary" id="search-btn" onClick={() => searchHandler()}>Search</Button>
        </div>
    );
}