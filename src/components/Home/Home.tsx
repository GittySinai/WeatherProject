import React, { FC, useState } from 'react';
import './Home.scss';
import WeatherCard from '../WeatherCard/WeatherCard';

interface HomeProps { }

const Home = () => {
  const [cities, setCities] = useState<string[]>([
    "Eilat", "London", "New York", "Alaska"
  ]);

  
  return <div className="Home">

    <h1>מזג האוויר בערים</h1>
    <div className="WeatherCardsContainer">
        {cities.map((city, index) => (
          <WeatherCard key={index} cityName={city} />
        ))}
      </div>
  </div>
}

export default Home;
