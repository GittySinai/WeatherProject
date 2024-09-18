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

    return (
      <div className="WeatherCard card">
        <div className="card-body">
          <h2 className="card-title">{props.cityName}</h2>
          {weather ? (
            <div dir="rtl">
              <p className="card-text"> {weather.description}</p>
              <h3 className="card-text">טמפ' נמדדת: {weather.temp}°C</h3>
              <h3 className="card-text">טמפ' מורגשת: {weather.feels_like}°C</h3>
              <h3 className="card-text">לחות: {weather.humidity}%</h3>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
  export default WeatherCard;
