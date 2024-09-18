import axios from "axios"
const API_KEY = '8ee633956bad6ae1965b557a94ecfcba';

class WeatherService{

    getWeatherByCity  =(cityName: any)=>{
       return axios.get(`https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={API_KEY}`)
      }
    
  }
  
  export default new WeatherService