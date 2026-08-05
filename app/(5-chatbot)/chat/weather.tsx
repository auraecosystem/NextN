import {
  Cloud,
  Sun,
  CloudRain,
  CloudSnow,
  CloudFog,
  CloudLightning,
} from "lucide-react";
 
export interface WeatherData {
  city: string;
  temperature: number;
  weatherCode: number;
  humidity: number;
}
 
function getWeatherIcon(weatherCode: number) {
  if (weatherCode === 0) return <Sun size={48} />;
  if (weatherCode === 1 || weatherCode === 2) return <Cloud size={48} />;
  if (weatherCode === 3) return <CloudFog size={48} />;
  if (weatherCode >= 51 && weatherCode <= 67) return <CloudRain size={48} />;
  if (weatherCode >= 71 && weatherCode <= 77) return <CloudSnow size={48} />;
  if (weatherCode >= 80 && weatherCode <= 99) return <CloudLightning size={48} />;
  return <Sun size={48} />;
}
 
function getWeatherCondition(weatherCode: number): string {
  if (weatherCode === 0) return 'Clear sky';
  if (weatherCode === 1) return 'Mainly clear';
  if (weatherCode === 2) return 'Partly cloudy';
  if (weatherCode === 3) return 'Overcast';
  // Add more conditions as needed
  return 'Unknown';
}
 
export default function Weather({ weatherData }: { weatherData: WeatherData }) {
  return (
    <div className="text-white p-6 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-lg max-w-sm">
      <h2 className="text-2xl font-semibold mb-4">{weatherData.city}</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-light mb-1">{weatherData.temperature}°C</p>
          <p className="text-lg opacity-90">
            {getWeatherCondition(weatherData.weatherCode)}
          </p>
        </div>
        <div className="ml-6" aria-hidden="true">
          {getWeatherIcon(weatherData.weatherCode)}
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <CloudFog size={16} aria-hidden="true" />
        <span className="ml-2 text-sm">Humidity: {weatherData.humidity}%</span>
      </div>
    </div>
  );
}
