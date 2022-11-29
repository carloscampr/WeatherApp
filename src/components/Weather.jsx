import React from 'react'


const Weather = ({weather, temperature, isCelsius, changeUnitTemp}) =>{
    console.log(weather);
    //const tempC= ((weather.main.temp)- 273.15);
    console.log(weather.main.temp);
    //console.log(tempC);
    console.log(weather.weather[0].description)
    return(
        <article className='WeatherCard'>
            <h1>Weather App</h1>
            <h2>{`${weather.name}, ${weather.sys.country}`}</h2>
            <section>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0]?.icon}@4x.png`} alt="logo"/>
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
        </article>
    )
}
export default Weather
//<p>{`${tempC.toFixed(2)}`} K</p>