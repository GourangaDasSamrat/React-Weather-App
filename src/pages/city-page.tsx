import { FavoriteButton } from "@/components/favorite-button";
import { SeoHelmet } from "@/components/seo-helmet";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useForecastQuery, useWeatherQuery } from "@/hooks/use-weather";
import { AlertTriangle } from "lucide-react";
import { useParams, useSearchParams } from "react-router-dom";
import { CurrentWeather } from "../components/current-weather";
import { HourlyTemperature } from "../components/hourly-temprature";
import WeatherSkeleton from "../components/loading-skeleton";
import { WeatherDetails } from "../components/weather-details";
import { WeatherForecast } from "../components/weather-forecast";

export function CityPage() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");
  const cityName = params.city || "Unknown City";

  const coordinates = { lat, lon };

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);

  const seoTitle = `${cityName} Weather Forecast | EcoSky Weather`;
  const seoDescription = weatherQuery.data
    ? `Current weather in ${cityName}: ${Math.round(
        weatherQuery.data.main.temp
      )}°C, ${
        weatherQuery.data.weather[0].description
      }. View detailed forecast, hourly temperature, and weather conditions on EcoSky Weather.`
    : `Get detailed weather forecast for ${cityName}. View real-time updates, hourly temperature, and weather conditions on EcoSky Weather.`;

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <>
        <SeoHelmet
          title={`Weather Information Unavailable | EcoSky Weather`}
          description="Weather information is temporarily unavailable. Please try again later."
          url={`/city/${cityName}`}
          type="website"
        />
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Failed to load weather data. Please try again.
          </AlertDescription>
        </Alert>
      </>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data || !params.cityName) {
    return <WeatherSkeleton />;
  }

  return (
    <>
      <SeoHelmet
        title={seoTitle}
        description={seoDescription}
        url={`/city/${cityName}`}
        type="website"
      />
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            {params.cityName}, {weatherQuery.data.sys.country}
          </h1>
          <div className="flex gap-2">
            <FavoriteButton
              data={{ ...weatherQuery.data, name: params.cityName }}
            />
          </div>
        </div>

        <div className="grid gap-6">
          <CurrentWeather data={weatherQuery.data} />
          <HourlyTemperature data={forecastQuery.data} />
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <WeatherDetails data={weatherQuery.data} />
            <WeatherForecast data={forecastQuery.data} />
          </div>
        </div>
      </div>
    </>
  );
}
