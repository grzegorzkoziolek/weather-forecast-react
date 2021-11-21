import { IWeatherForecast3h } from "./WeatherForecast3h";

export interface IWeatherForecast {
  cod: string;
  message: number;
  cnt: number;
  list: IWeatherForecast3h[];
}
