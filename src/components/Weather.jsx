import React from 'react'
import { useState } from 'react';

const Weather = ({weather, temperature, isCelsius, changeUnitTemp, newCallAPISearch}) =>{
    //console.log(weather);
    const [place, setPlace]= useState("")
    const tempC= ((weather.main.temp)- 273.15);
    const handleChangePlace = (e) =>{
        setPlace(e.target.value);
        //console.log(e.target.value);
    }
    //console.log(weather.main.temp);
    //console.log(tempC);
    return(
        <article className='WeatherCard'>
            <h1>Weather App</h1>
            <h2>{`${weather.name}, ${weather.sys.country}`}</h2>
            <section>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@4x.png`} alt="logo"/>
                </div>
                <ul className='WeatherList'>
                    <li>{weather.weather[0].description}</li>
                    <li>Wind speed: <span>{weather.wind.speed}</span> m/s</li>
                    <li>Clouds: <span>{weather.clouds.all}</span> %</li>
                    <li>Pressure: <span>{weather.clouds.all}</span> hPa</li>
                </ul>
            </section>
            <p>{isCelsius ? `${temperature.celsius} ºC` : `${temperature.fahrenheit} ºF`}</p>
            <button onClick={changeUnitTemp}>Degrees °F/°C</button>
            <input type="text" value={place} onChange={handleChangePlace}/>
            <button onClick={()=>newCallAPISearch(place)}>Search</button>
        </article>
    )
}
export default Weather
//<p>{`${tempC.toFixed(2)}`} K</p>