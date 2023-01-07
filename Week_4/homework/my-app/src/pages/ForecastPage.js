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

export default function SearchPage(props) {
    return (
        <div className="weather-heading">
            <h2>{props.today}</h2>
            <h1>Weather for {props.city}</h1>
            <h3>{props.cityInput}</h3>
            <WeatherWidget weatherData={props.weatherData} days={props.days}></WeatherWidget>
        </div>
        )
}