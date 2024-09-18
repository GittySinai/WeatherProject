import React, { FC, useState } from 'react';
import './Home.scss';
import WeatherCard from '../WeatherCard/WeatherCard';

interface HomeProps { }

const Home = () => {
  const [cities, setCities] = useState<string[]>([
    "Eilat", "London", "New York", "Alaska"
  ]);

  
  return <div className="Home">

<div className="Home container">
      <h1>תחזית מסביב לעולם  </h1>
      <div className="row">
        {cities.map((city, index) => (
          <div key={index} className="col-md-6 mb-4">
            <WeatherCard cityName={city} />
          </div>
        ))}
      </div>
    </div>
  </div>
}

export default Home;
