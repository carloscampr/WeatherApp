
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Weather from './components/Weather';

function App() {
  const [coords, setCoords]=useState();
  const [weather, setWeather]=useState();
  const [temperature, setTemperature] = useState();
  const [isCelsius, setCelsius] = useState(true);
  
  //We get the coords here
  const success = (pos)=>{
    const newCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(newCoords)
  }
  const newCallAPISearch = (cityNames)=>{
    const APIKey = "c934cc0e9364820517c3d83a76019b25";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=${APIKey}`
    axios.get(url)
      .then(res =>setWeather(res.data))
      .catch(err=> alert("Not found this place"))
  }
  const changeUnitTemp = () =>{
    setCelsius(!isCelsius)
  }
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  useEffect(()=>{
    if(coords){
      const apiKey = "c934cc0e9364820517c3d83a76019b25"
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(url)
      .then(res=> {
        const tempKelvin = res.data.main.temp;
        const tempCel = tempKelvin - 273.15;
        const tempFarh = ((tempCel)*9/5)+32;
        const newTemp = {
          celsius: tempCel.toFixed(2),
          fahrenheit: tempFarh.toFixed(2)
        }
        setTemperature(newTemp);
        setWeather(res.data)
      })
      .catch(err=>console.log(err))
    }
  },[coords])
  //console.log(temperature);

  //console.log(weather)
  return (
    <div className="App">
      {
        weather ? <Weather weather={weather} temperature={temperature} changeUnitTemp={changeUnitTemp} isCelsius={isCelsius} newCallAPISearch = {newCallAPISearch}/> : <p>loading...</p>
      }
    </div>
  )
}

export default App
