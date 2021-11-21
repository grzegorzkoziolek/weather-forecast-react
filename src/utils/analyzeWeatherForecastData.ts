
import { IWeatherForecastGroups, IWeatherForecastGroup, IMergedWeather } from './cleanWeatherForecastData';
import getDayOfTheWeekFromDate from './getDayOfTheWeekFromDate';

export interface IDailyForecast {
  date: string;
  day: string;
  maxTemp: number;
  minTemp: number;
  icon: string;
  description: string;
}

interface IAnalyzedDailyForecasts extends Array<IDailyForecast>{};

function analyzeDailyForecasts(dailyForecast: IWeatherForecastGroup): IDailyForecast {
  let maxTemp: number = -100;
  let minTemp: number = 100;
  let icon: string = '';
  const day = getDayOfTheWeekFromDate(dailyForecast.date);
  let description: string = '';

  dailyForecast.mergedWeathers.forEach((mergedWeather: IMergedWeather) => {
    if (maxTemp < mergedWeather.temp_max) {
      maxTemp = mergedWeather.temp_max;
    }
    if (minTemp > mergedWeather.temp_min) {
      minTemp = mergedWeather.temp_min;
    }
    icon = mergedWeather.icon;
    description = mergedWeather.description
  })
  return {
    date: dailyForecast.date,
    day,
    maxTemp,
    minTemp,
    icon,
    description,
  }
}

export default function analyzeWeatherForecastData(
  dailyForecasts: IWeatherForecastGroups
) {
  let analyzedDailyForecasts: IAnalyzedDailyForecasts = [];
  dailyForecasts.forEach((dailyForecast: IWeatherForecastGroup) => {
    analyzedDailyForecasts = [
      ...analyzedDailyForecasts,
      analyzeDailyForecasts(dailyForecast)
    ];
  })
  return analyzedDailyForecasts;
}
