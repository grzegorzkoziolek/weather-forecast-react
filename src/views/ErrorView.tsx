import { ErrorPage, RefreshButton } from "appSrc/containers";

export default function WeatherForecastViews() {
  return (
    <main>
      <RefreshButton />
      <ErrorPage />
    </main>
  );
}
