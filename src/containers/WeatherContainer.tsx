import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { FlexBox } from "appSrc/components";
import { CurrentWeather, WeatherForecast } from ".";
import { analyzeForecast, cleanForecastData } from "appSrc/utils";
import { IDailyForecasts, ICurrentWeather } from "appSrc/types";
import { IWeatherForecast } from "appSrc/types/WeatherForecast";

const FREEGEOIP_KEY = process.env.REACT_APP_FREEGEOIP_KEY;
const OPEN_WEATHER_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;

export interface IProcessedWeather {
  currentWeather: ICurrentWeather;
  weatherForecast: IDailyForecasts;
}
export default function WeatherContainer() {
  const [processedWeather, setProcessedWeather] = useState<IProcessedWeather | null>(null);

  const processForecastResponses = (forecastData: IWeatherForecast): IDailyForecasts => {
    const cleanedForecastData = cleanForecastData(forecastData);
    const dailyForecasts = analyzeForecast(cleanedForecastData);
    return dailyForecasts;
  };

  const getWeather = useCallback((city: string) => {
    const forecastRequest = axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${OPEN_WEATHER_KEY}`
    );
    const currentWeatherRequest = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER_KEY}`
    );

    Promise.all([currentWeatherRequest, forecastRequest])
      .then(([currentWeatherResponse, forecastResponse]) => {
        const dailyForecasts = processForecastResponses(forecastResponse.data);
        setProcessedWeather({
          currentWeather: currentWeatherResponse.data,
          weatherForecast: dailyForecasts,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.freegeoip.app/json/?apikey=${FREEGEOIP_KEY}`)
      .then((response) => {
        console.log(response.data);
        getWeather(response.data.city);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getWeather]);

  return (
    <FlexBox
      smHeight="100vh"
      smWidth="100vw"
      lgDirectionRow
      lgBackgroundColor="transparent"
      backgroundColor="transparent"
    >
      {processedWeather ? (
        <>
          <CurrentWeather {...processedWeather.currentWeather} />
          <WeatherForecast dailyForecasts={processedWeather.weatherForecast} />
        </>
      ) : null}
    </FlexBox>
  );
}
