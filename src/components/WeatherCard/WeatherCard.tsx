import React, { FC } from 'react';
import './WeatherCard.scss';

interface WeatherCardProps {
  cityName: string;

}

const WeatherCard = (props:WeatherCardProps) => {
  return<div className="WeatherCard">
      <h2>{props.cityName}</h2>
      </div>
}
export default WeatherCard;
