import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DebugButton from './components/DebugButton';
import SearchBox from './components/SearchBox';
import WeatherWidget from './components/WeatherWidget';
import TestComp from './components/TestComp';
import { useState } from 'react';
import { useEffect } from 'react';
import "./styles.css"
import DefaultLayout from './components/layouts/DefaultLayout';
import SearchPage from './pages/SearchPage';
import ForecastPage from './pages/ForecastPage';

function App() {
  const [count, setCount] = useState(0)
  const [city, setCity] = useState("");
  const API_KEY = process.env.REACT_APP_WEATHERMAP_KEY
  const [weatherData, setWeatherData] = useState(0)
  const [forecastToday, setForecastToday] = useState(0)
  const [timeZone, setTimeZone] = useState(0)
  const [airQuality, setAirQuality] = useState(0)
  useEffect(() => {console.log(weatherData)}, [weatherData])
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<SearchPage masterFunction={[setCity, setWeatherData, setTimeZone, setForecastToday, setAirQuality]}></SearchPage>}>
          <Route path='debug' element={<ForecastPage weatherData={weatherData} weatherToday={forecastToday} timeZone={timeZone} city={city} airQuality={airQuality}></ForecastPage>}></Route>
          {/*<Route path='debug' element={<WeatherWidget city="Austin, TX" today="Saturday 24" days={["Monday 22", "Tuesday 23", "Wednesday 24", "Thursday 25", "Friday 26"]}></WeatherWidget>}></Route>*/}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
