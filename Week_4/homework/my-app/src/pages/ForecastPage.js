import SearchBox from "../components/WeatherWidget";

import {
    createStyles,
    Group,
    Stack,
    Button,
    TextInput,
    Title,
    PasswordInput
  } from "@mantine/core";
import { Outlet } from "react-router-dom";
import WeatherWidget from "../components/WeatherWidget";
import moment from "moment"
import Card from 'react-bootstrap/esm/Card';

function weekdayFromAbbr(abbr){
    let fullName = ""
    switch(abbr){
        case "Mon":
            fullName = "Monday"
            break;
        case "Tue":
            fullName = "Tuesday"
            break;
        case "Wed":
            fullName = "Wednesday"
            break;
        case "Thu":
            fullName = "Thursday"
            break;
        case "Fri":
            fullName = "Friday"
            break;
        case "Sat":
            fullName = "Saturday"
            break;
        case "Sun":
            fullName = "Sunday"
            break;
        default:
            fullName = "Unknown abbreviation"
    }
    return (fullName)
}

export default function SearchPage(props) {

    // use try-catch block to catch errors in case the data is not loaded yet
    try{
    let weatherToday = props.weatherToday
    console.log(weatherToday)
    let dateTodayUnix = weatherToday["dt"]
    let dateToday = new Date(dateTodayUnix * 1000)
    console.log(dateToday)
    let dateString = dateToday.toDateString()
    console.log(dateString)
    let day = [dateString.split(" ")[0],dateString.split(" ")[2]]
    console.log(day)
    day[0] = weekdayFromAbbr(day[0])
    let aqi = props.airQuality["list"][0]["main"]["aqi"]
    console.log(day)
    console.log(weatherToday["weather"][0]["icon"])
    return (
        <div className="weather-container">
            <h2 id="day-indicator">{day[0] + " " + day[1]}</h2>
            <h1 id="city-indicator">Weather for {props.city}</h1>
            <div className="weather-today">
                <div className="weather-today-info">
                    <h2 id="condition-today">{weatherToday["weather"][0]["description"]}</h2>
                    <h2 id="temp-today">{Math.round(weatherToday["main"]["temp"]) + "°C"}</h2>
                    <h2 id="condition-today">AQI: {aqi}</h2>
                </div>
                <img className="weather-today-img" src = {"/icons/" + weatherToday["weather"][0]["icon"] + ".svg"} alt="My Happy SVG"/>
            </div>
            <WeatherWidget weatherData={props.weatherData} days={props.days}></WeatherWidget>
        </div>
        )
    }
    catch (TypeError) {
        console.log("Houston we have a problem!!")
        return;
    }
}