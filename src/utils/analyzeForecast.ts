import { IDailyForecasts, IDailyForecast } from "appSrc/types";
import { IWeatherForecastGroups, IWeatherForecastGroup, IMergedWeather } from "./cleanForecastData";
import getDayOfTheWeekFromDate from "./getDayOfTheWeekFromDate";

function analyzeDailyForecasts(dailyForecast: IWeatherForecastGroup): IDailyForecast {
  let maxTemp: number = -100;
  let minTemp: number = 100;
  let icon: string = "";
  const day = getDayOfTheWeekFromDate(dailyForecast.date);
  let description: string = "";

  dailyForecast.mergedWeathers.forEach((mergedWeather: IMergedWeather) => {
    if (maxTemp < mergedWeather.temp_max) {
      maxTemp = mergedWeather.temp_max;
    }
    if (minTemp > mergedWeather.temp_min) {
      minTemp = mergedWeather.temp_min;
    }
    icon = mergedWeather.icon;
    description = mergedWeather.description;
  });
  return {
    date: dailyForecast.date,
    day,
    maxTemp,
    minTemp,
    icon,
    description,
  };
}

export default function analyzeForecast(dailyForecasts: IWeatherForecastGroups) {
  let analyzedDailyForecasts: IDailyForecasts = [];

  dailyForecasts.forEach((dailyForecast: IWeatherForecastGroup) => {
    analyzedDailyForecasts = [...analyzedDailyForecasts, analyzeDailyForecasts(dailyForecast)];
  });
  return analyzedDailyForecasts;
}
