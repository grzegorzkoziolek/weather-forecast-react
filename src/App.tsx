import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import { useRoutes } from 'react-router-dom';
import { WeatherForecastView, ErrorView }from './views/';

function App() {
  let routes = useRoutes([
    { path: '/', element: <WeatherForecastView /> },
    { path: '/error', element: <ErrorView /> },
    { path: '*', element: <WeatherForecastView /> }
  ]);

  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          html,
          body {
            padding: 0;
            margin: 0;
            min-height: 100vh;
            min-width: 100vw;
            font-family: "Source Sans Pro", sans-serif;
            font-size: 10px;
            background-color: #4a90e2;
          }
        `}
      />
      {routes}
    </>
  );
}

export default App;
