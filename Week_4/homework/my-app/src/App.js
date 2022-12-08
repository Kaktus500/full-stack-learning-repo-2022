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

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <DebugButton></DebugButton>
      <Routes>
        <Route path="/" element={<SearchPage></SearchPage>}>
          <Route path='debug' element={<WeatherWidget></WeatherWidget>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
