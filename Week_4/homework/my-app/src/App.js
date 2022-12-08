import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from "react-router-dom";
import DebugButton from './components/DebugButton';
import SearchBox from './components/SearchBox';
import WeatherWidget from './components/WeatherWidget';
import { useState } from 'react';
import { useEffect } from 'react';
import "./styles.css"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
        <div className="App-header">
          Count: {count}
          {useEffect(() => {count%2===0 && console.log("Even number")}, [count])}
          <DebugButton buttonText="Hello World" countIncrementer={setCount} currentCount={count}></DebugButton>
          <SearchBox></SearchBox>
          <WeatherWidget></WeatherWidget>
        </div>
    </div>
  );
}

export default App;
