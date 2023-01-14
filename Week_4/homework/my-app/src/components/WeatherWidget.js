import React from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/esm/Card';
import WeatherCard from "./WeatherCard";
import moment from "moment"

export default function WeatherWidget(props) {
    const cards = props.weatherData
    console.log(cards)
    var htmlCards = []
    try {  
    cards.map((item, index) => {
        let dt_string = props.weatherData[index]["date"]
        let day = dt_string.split(" ")[0].split("-")[2]
        let dt = moment(dt_string, "YYYY-MM-DD HH:mm:ss")
        htmlCards.push(<WeatherCard icon={props.weatherData[index]["icon"]} key={"card " + index} day={dt.format("dddd") + " " + day} temp={{"max":props.weatherData[index]["temp_max"],"min":props.weatherData[index]["temp_min"]}}></WeatherCard>)
    })
    } catch (TypeError) {
        console.log("Caught potential error")
    }
    return (
        <div className="container" id="row-weather">
            <div className="row row-cols-5">
                {htmlCards}
            </div>
        </div>
    )
    /*return (
    <div className="container">
    <div className="row row-cols-5">
        <div className="col">
            <Card className="weather-widget">
                <div className="card-body">
                    <h5 className="card-title-weather">{props.days[0]}</h5>
                    <img src = "/icons/01d.svg" alt="My Happy SVG"/>
                </div> 
            </Card>
        </div>
        <div className="col">
            <Card className="weather-widget">
                <div className="card-body">
                    <h5 className="card-title-weather">{props.days[1]}</h5>
                    <img src = "/icons/01d.svg" alt="My Happy SVG"/>
                </div>
            </Card>
        </div>
        <div className="col">
            <Card className="weather-widget">
                <div className="card-body">
                    <h5 className="card-title-weather">{props.days[2]}</h5>
                    <img src = "/icons/01d.svg" alt="My Happy SVG"/>
                </div>
            </Card>
        </div>
        <div className="col">
            <Card className="weather-widget">
                <div className="card-body">
                    <h5 className="card-title-weather">{props.days[3]}</h5>
                    <img src = "/icons/01d.svg" alt="My Happy SVG"/>
                </div>
            </Card>
        </div>
        <div className="col">
            <Card className="weather-widget">
                <div className="card-body">
                    <h5 className="card-title-weather">{props.days[4]}</h5>
                    <img src = "/icons/01d.svg" alt="My Happy SVG"/>
                </div>
            </Card>
        </div>
    </div>
    </div>
    );*/ 
}