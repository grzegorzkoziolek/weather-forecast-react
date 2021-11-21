import "./App.css";
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
            background: white;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
          }
        `}
      />
      <WeatherForecastViews />
    </>
  );
}

export default App;
