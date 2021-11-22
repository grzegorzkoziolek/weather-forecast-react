import { Header, FlexBox, Image } from "appSrc/components";
import { IDailyForecast } from "appSrc/types";
import { tempDecorator } from "appSrc/utils";

export default function CurrentWeather(props: IDailyForecast) {
  const { day, minTemp, maxTemp, icon, description } = props;
  return (
    <FlexBox
      htmlTag="article"
      smWidth="260px"
      mWidth="320px"
      lgDirectionRow
      smDirectionRow
      smJustifyContent="space-between"
      mJustifyContent="space-between"
      lgJustifyContent="space-between"
      lgBackgroundColor="white"
      marginTop="10px"
      mMarginTop="15px"
    >
      <Header width="70px" fontSize="17px" mFontSize="20px" fontWeight={400} lgFontColor="#4A90E2">
        {day}
      </Header>
      <Image
        alt={description}
        width="22px"
        mWidth="30px"
        src={process.env.PUBLIC_URL + `/icons/${icon}.png`}
      />
      <Header
        fontSize="17px"
        mFontSize="20px"
        fontWeight={400}
        lgFontColor="#4A90E2"
        marginRight="20px"
      >
        {tempDecorator(minTemp)}
      </Header>
      <Header
        fontSize="17px"
        mFontSize="20px"
        fontWeight={400}
        smFontColor="#F8E71C"
        lgFontColor="red"
      >
        {tempDecorator(maxTemp)}
      </Header>
    </FlexBox>
  );
}
