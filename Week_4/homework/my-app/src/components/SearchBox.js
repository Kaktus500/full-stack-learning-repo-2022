import React from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function SearchBox() {
    return (
        <div className="flex-container">
            <div className="text-box">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Search for a city"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="here you can type whatever you want, it has no effect"
                  />
                </FloatingLabel>
            </div>
            <div><Button variant="primary">Search</Button></div>
        </div>
    );
}