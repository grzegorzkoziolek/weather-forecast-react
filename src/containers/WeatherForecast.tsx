import CurrentWeather from "./DailyWeatherForecast";
import { FlexBox } from "appSrc/components";
import { IDailyForecasts, IDailyForecast } from "appSrc/types";

export default function WeatherForecast({ dailyForecasts }: { dailyForecasts: IDailyForecasts }) {
  return (
    <FlexBox
      htmlTag="section"
      aria-label="weather forecast"
      smWidth="100vw"
      lgWidth="70vw"
      smHeight="45vh"
      mHeight="55vh"
      lgHeight="100vh"
      backgroundColor='#4a90e2'
      lgBackgroundColor="white"
      mJustifyContent="start"
    >
      {dailyForecasts.map((dailyForecast: IDailyForecast) => {
        return <CurrentWeather key={dailyForecast.date} {...dailyForecast} />;
      })}
    </FlexBox>
  );
}
