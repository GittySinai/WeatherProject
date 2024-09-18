import React, { FC, useEffect, useState } from 'react';
import './WeatherCard.scss';
import weatherService from '../../services/weather.service';
import { WeatherModel } from '../../models/weatherModel.model';
interface WeatherCardProps {
  cityName: string;
}

const WeatherCard = (props: WeatherCardProps) => {


  const [weather, setWeather] = useState<WeatherModel>();

  const getWeatherByCity = async () => {
    
    try {
      const response = await weatherService.getWeatherByCity(props.cityName);
      const data = response.data;
      const formattedWeather: WeatherModel = {
        name: data.name,
        description: data.weather[0].description,
        temp: Math.round(data.main.temp), 
        feels_like: Math.round(data.main.feels_like), 
        humidity: data.main.humidity,
      };
      setWeather(formattedWeather);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
    useEffect(() => {
      getWeatherByCity();
    }, [props.cityName]);

    return <div className="WeatherCard">
    <h2>{props.cityName}</h2>
    {weather ? (
      <div>
        <p>תיאור: {weather.description}</p>
        <p>טמפ' נמדדת: {weather.feels_like}C</p> 
        <p>טמפ' מורגשת: {weather.feels_like}C</p> 
        <p>לחות: {weather.humidity}%</p>
      </div>
    ) : (
      <p></p>
    )}
  </div>
  }
  export default WeatherCard;
