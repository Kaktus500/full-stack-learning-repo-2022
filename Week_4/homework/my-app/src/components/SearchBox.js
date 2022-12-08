import React from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

export default function SearchBox() {
    const [city, setCity] = useState('');
    const textInputHandler = event => {
      setCity(event.target.value);
    };
    function searchHandler() {
      console.log(city)
    }
    return (
        <div className="flex-container">
            <div className="text-box">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Search for a city"
                  className="mb-3"
                  onChange={textInputHandler}
                  value={city}
                >
                  <Form.Control
                    type="email"
                    placeholder="here you can type whatever you want, it has no effect"
                  />
                </FloatingLabel>
            </div>
            <div><Button variant="primary" onClick={searchHandler}>Search</Button></div>
        </div>
    );
}