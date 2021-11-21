import IMainClass from "./MainClass";
import IWeather from "./Weather";

interface ISys {
  pod: "n" | "d";
}

export interface IWeatherForecast3h {
  dt: number;
  main: IMainClass;
  weather: IWeather[];
  visibility: number;
  pop: number;
  dt_txt: string;
  sys: ISys;
}
