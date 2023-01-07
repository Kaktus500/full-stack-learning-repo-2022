import React from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/esm/Card'

export default function WeatherWidget(props) {
    return (
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
    ); 
}