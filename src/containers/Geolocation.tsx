import { useEffect, useState } from "react";
import axios from "axios";
import { FlexBox } from "appSrc/components";
import { CurrentWeather, WeatherForecast } from ".";

const FREEGEOIP_KEY = process.env.REACT_APP_FREEGEOIP_KEY;

export default function Geolocation() {
  const [city, setCity] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.freegeoip.app/json/?apikey=${FREEGEOIP_KEY}`)
      .then(function (response) {
        console.log(response.data);
        setCity(response.data.city);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return city ? (
    <FlexBox smHeight="100vh" smWidth="100vw" lgDirectionRow>
      <CurrentWeather city={city} />
      <WeatherForecast city={city} />
    </FlexBox>
  ) : null;
}
