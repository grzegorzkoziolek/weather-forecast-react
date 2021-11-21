import IMainClass from "./MainClass";
import IWeather from "./Weather";

export default interface ICurrentWeather {
  weather: IWeather[];
  base: string;
  main: IMainClass;
  visibility: number;
  dt: number;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}