import axios from "axios";

const API_KEY = '8ee633956bad6ae1965b557a94ecfcba';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

class WeatherService {
  getWeatherByCity = (cityName: string) => {
    return axios.get(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric&lang=he`);
  }
}

export default new WeatherService();
