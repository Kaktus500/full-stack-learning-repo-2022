import React from "react";
import Button from "react-bootstrap/esm/Button";

export default function DebugButton(props) {
    function onClickHandler() {
        console.log("Debug Button was clicked!")
        props.countIncrementer(props.currentCount + 1)
    }
    return <Button variant="primary" onClick={onClickHandler}>{props.buttonText}</Button>
}