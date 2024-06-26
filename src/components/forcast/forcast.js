import { Accordion,
    AccordionItem, 
    AccordionItemHeading, 
    AccordionItemPanel, 
    AccordionItemButton
} from "react-accessible-accordion";

import './forcast.css';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    
    return (
        <Accordion allowZeroExpanded>
            {data.forecastResponse.list.slice(0, 7).map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img className="icon-small" src={`icons/${item.weather[0].icon}.png`} alt="weather icon" />
                                <label className="day">{forecastDays[index]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <div className="min-max">
                                    <label>{Math.round(item.main.temp_min)}°C</label>
                                    <label>{Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                            <div className="daily-details-grid-item">
                                <label>Pressure:</label>
                                <label>{item.main.pressure} hPa</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Humidity:</label>
                                <label>{item.main.humidity}%</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Clouds:</label>
                                <label>{item.clouds.all}%</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Wind speed:</label>
                                <label>{item.wind.speed} m/s</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Sea level:</label>
                                <label>{item.main.sea_level} m</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Feels like:</label>
                                <label>{Math.round(item.main.feels_like)}°C</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default Forecast;
