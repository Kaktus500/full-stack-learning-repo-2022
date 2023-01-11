import React from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/esm/Card';

const iconMappings = {}

export default function WeatherCard(props){
    return (
        <div className="col">
            <Card className="weather-card">
                <div className="card-body">
                    <h5 className="card-title-weather">{props.day}</h5>
                    <img src = {"/icons/" + props.icon + ".svg"} alt="My Happy SVG"/>
                    <p className="card-temp">{props.temp["min"] + "°C to " + props.temp["max"] + "°C"}</p>
                </div> 
            </Card>
        </div>
    );
}