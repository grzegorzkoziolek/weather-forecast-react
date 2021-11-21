import { useEffect, useState } from "react";
import axios from "axios";
import { FlexBox } from "appSrc/components";
import cleanWeatherForecastData from "appSrc/utils/cleanWeatherForecastData";
import { IWeatherForecast } from "appSrc/types/WeatherForecast";
import analyzeWeatherForecastData, { IDailyForecast } from "appSrc/utils/analyzeWeatherForecastData";
import CurrentWeather from "./DailyWeatherForecast";

const OPEN_WEATHER_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;

export default function WeatherForecast({ city }: { city: string }) {
  const [weatherForecast, setWeatherForecast] = useState<IWeatherForecast>();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${OPEN_WEATHER_KEY}`
      )
      .then(function (response) {
        console.log('forecast', response);
        setWeatherForecast(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [city]);

  if (weatherForecast) {
    const cleanedWeatherForecastData =
      cleanWeatherForecastData(weatherForecast);
    const dailyForecasts = analyzeWeatherForecastData(
      cleanedWeatherForecastData
    );
    console.log('five-day forecast', dailyForecasts);
    return (
      <FlexBox
        htmlTag="section"
        aria-label= "weather forecast"
        smHeight="50vh"
        mWidth="60vh"
        lgWidth="70vw"
        lgHeight="100vh"
        lgBackgroundColor="white"
      >
        {dailyForecasts.map((dailyForecast: IDailyForecast) => {
          return <CurrentWeather key={dailyForecast.date} {...dailyForecast} />
        })}
      </FlexBox>
    );
  }
  return null;
}
