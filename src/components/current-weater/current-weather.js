import React from "react";
import "./current-weather.css";

const CurrentWeather = ({data}) => {

    
    return (
        <div className="weather">
            <div className="top">
                <p className="city">{data.city}</p>
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <p className="feeling">Feels like {Math.round(data.main.feels_like)}°C</p>
                <p className="weather-description">{data.weather[0].description}</p>
            </div>
            <div className="details">
                <img alt="weather icon" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
                <div className="details-right">
                    <div className="details-row">
                        <p className="details-label">H</p>
                        <p className="details-value">{data.main.humidity}</p>
                        <p className="details-metric">%</p>
                    </div>
                    <div className="details-row">
                        <p className="details-label">WS</p>
                        <p className="details-value">{data.wind.speed}</p>
                        <p className="details-metric">km/h</p>
                    </div>
                    <div className="details-row">
                        <p className="details-label">P</p>
                        <p className="details-value">{data.main.pressure}</p>
                        <p className="details-metric">hPa</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;
