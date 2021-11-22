import { Header, FlexBox, Image } from "appSrc/components";
import ICurrentWeather from "appSrc/types/CurrentWeather";
import { tempDecorator } from "appSrc/utils";
import { capitalCase } from "change-case";

export default function CurrentWeather({ main, weather }: ICurrentWeather) {
  const weatherDescription = capitalCase(weather[0].description);

  return (
    <section aria-label="current weather">
      <FlexBox
        htmlTag="article"
        smHeight="55vh"
        mHeight="45vh"
        lgHeight="100vh"
        smWidth="100vw"
        lgWidth="30vw"
        backgroundColor="#4a90e2"
      >
        <Image
          alt={weatherDescription}
          src={process.env.PUBLIC_URL + `/icons/${weather[0].icon}.png`}
        />
        <Header fontSize="22px" fontWeight={600} marginTop="30px">
          {weatherDescription}
        </Header>
        <Header fontSize="22px" fontWeight={600} marginTop="5px">
          {tempDecorator(main.temp)}
        </Header>

        <Header fontSize="16px" fontWeight={600} marginTop="30px">
          min. {tempDecorator(main.temp_min)} / max. {tempDecorator(main.temp_max)}
        </Header>
      </FlexBox>
    </section>
  );
}
