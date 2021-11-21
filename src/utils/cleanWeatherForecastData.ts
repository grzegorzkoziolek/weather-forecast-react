import { IWeatherForecast } from "../types/WeatherForecast";
import { IWeatherForecast3h } from "appSrc/types/WeatherForecast3h";
import IWeather from "../types/Weather";
import IMainClass from "../types/MainClass";

export interface IMergedWeather extends IWeather, IMainClass { };

export interface IWeatherForecastGroup {
  date: string;
  mergedWeathers: IMergedWeather[];
}

export interface IWeatherForecastGroups extends Array<IWeatherForecastGroup> {}

export default function cleanWeatherForecastData(
  forecastData: IWeatherForecast
): IWeatherForecastGroups {
  const forecastList = forecastData.list;
  const removedNightForecast = forecastList.filter(
    (weatherForecast3h: IWeatherForecast3h) => weatherForecast3h.sys.pod === "d"
  );

  const weatherForecastsMergedData = removedNightForecast.map(
    (weatherForecast3h: IWeatherForecast3h): IWeatherForecastGroup => {
      const weatherForecastDate = weatherForecast3h.dt_txt.split(" ")[0];
      const mergedWeather: IMergedWeather = {
        ...weatherForecast3h.weather[0],
        ...weatherForecast3h.main,
      };
      return {
        date: weatherForecastDate,
        mergedWeathers: [mergedWeather],
      };
    }
  );

  let currentWeatherForecastGroup: IWeatherForecastGroup;
  const weatherForecastGroups = [] as IWeatherForecastGroups;
  let previousDate = "";

  weatherForecastsMergedData.forEach((weatherForecast: IWeatherForecastGroup) => {
    if (previousDate === weatherForecast.date) {
      currentWeatherForecastGroup.mergedWeathers.push(weatherForecast.mergedWeathers[0])
    } else {
      currentWeatherForecastGroup = weatherForecast;
      weatherForecastGroups.push(currentWeatherForecastGroup);
    }
    previousDate = weatherForecast.date
  });
  return weatherForecastGroups;
}
