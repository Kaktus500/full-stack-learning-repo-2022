import React from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/esm/Card'

export default function WeatherWidget() {
    return (
    <div className="row-weather">
    <Card className="weather-widget">
        <div className="card-body">
            <h5 className="card-title-weather">Monday</h5>
            <img src = "/icons/01d.svg" alt="My Happy SVG"/>
        </div> 
    </Card>
    <Card className="weather-widget">
        <div className="card-body">
            <h5 className="card-title-weather">Monday</h5>
            <img src = "/icons/01d.svg" alt="My Happy SVG"/>
        </div>
    </Card>
    <Card className="weather-widget">
        <div className="card-body">
            <h5 className="card-title-weather">Monday</h5>
            <img src = "/icons/01d.svg" alt="My Happy SVG"/>
        </div>
    </Card>
    </div>
    ); 
}