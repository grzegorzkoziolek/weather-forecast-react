import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import WeatherForecastViews from "./views/WeatherForecastView";

function App() {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          html,
          body {
            padding: 0;
            margin: 0;
            min-height: 100%;
            font-family: "Source Sans Pro", sans;
          }
        `}
      />
      <WeatherForecastViews />
    </>
  );
}

export default App;
