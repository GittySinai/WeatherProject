export class WeatherModel {
    name: string;
    description: string;
    temp: number;
    feels_like: number;
    humidity: number;
  
    constructor(name: string, description: string, temp: number, feels_like: number, humidity: number) {
      this.name = name;
      this.description = description;
      this.temp = temp;
      this.feels_like = feels_like;
      this.humidity = humidity;
    }
  }