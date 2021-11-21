import { useEffect, useState } from "react";
import axios from "axios";
import { Header, FlexBox, Image } from "appSrc/components";
import ICurrentWeather from "appSrc/types/CurrentWeather";
import { capitalCase } from "change-case";
import tempDecorator from "../utils/tempDecorator";

const OPEN_WEATHER_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;

export default function CurrentWeather({ city }: { city: string }) {
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER_KEY}`
      )
      .then(function (response) {
        console.log("current", response);
        setCurrentWeather(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [city]);

  if (currentWeather) {
    const weatherDescription = capitalCase(
      currentWeather.weather[0].description
    );

    return (
      <section aria-label="current weather">
        <FlexBox
          htmlTag="article"
          smHeight="60vh"
          mWidth="40vh"
          lgHeight="100vh"
          lgWidth="30vw"
        >
          <Image
            alt={weatherDescription}
            src={
              process.env.PUBLIC_URL +
              `/icons/${currentWeather.weather[0].icon}.png`
            }
          />
          <Header fontSize="22px" fontWeight={500} marginTop="30px">
            {weatherDescription}
          </Header>
          <Header fontSize="22px" fontWeight={500} marginTop="5px">
            {tempDecorator(currentWeather.main.temp)}
          </Header>

          <Header fontSize="14px" fontWeight={600} marginTop="30px">
            min. {tempDecorator(currentWeather.main.temp_min)} / max.{" "}
            {tempDecorator(currentWeather.main.temp_max)}
          </Header>
        </FlexBox>
      </section>
    );
  }
  return null;
}
