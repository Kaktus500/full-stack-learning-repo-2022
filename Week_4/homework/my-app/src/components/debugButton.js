import React from "react";
import Button from 'react-bootstrap/Button';

export default function DebugButton(props) {
    function onClickHandler() {
        console.log("I was clicked")
    }
    return <Button variant="primary" onClick={onClickHandler}>{props.text}</Button>
}