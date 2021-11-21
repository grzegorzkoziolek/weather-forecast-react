import { Header, FlexBox, Image } from "appSrc/components";
import tempDecorator from "../utils/tempDecorator";
import { IDailyForecast } from "appSrc/utils/analyzeWeatherForecastData";

export default function CurrentWeather(props: IDailyForecast) {
  const { day, minTemp, maxTemp, icon, description } = props;
  return (
    <FlexBox
      htmlTag="article"
      smWidth="90vw"
      mWidth="60vw"
      lgWidth="30vw"
      lgDirectionRow
      smDirectionRow
      justifyContent="space-between"
      lgBackgroundColor="white"
    >
      <Header width="50px" fontSize="16px" fontWeight={400} lgFontColor="#4A90E2">
        {day}
      </Header>
      <Image
        alt={description}
        width="30px"
        src={process.env.PUBLIC_URL + `/icons/${icon}.png`}
      />
      <Header fontSize="16px" fontWeight={400} lgFontColor="#4A90E2">
        min. {tempDecorator(minTemp)}
      </Header>
      <Header fontSize="16px" fontWeight={400} lgFontColor="red">
        max. {tempDecorator(maxTemp)}
      </Header>
    </FlexBox>
  );
}
