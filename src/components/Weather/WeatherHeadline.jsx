import { useContext } from "react";
import CloudIcon from "../../assets/cloud.svg";
import DrizzleIcon from "../../assets/drizzle.svg";
import HazeIcon from "../../assets/haze.svg";
import PinIcon from "../../assets/pin.svg";
import RainIcon from "../../assets/rainy.svg";
import SnowIcon from "../../assets/snow.svg";
import SunIcon from "../../assets/sun.svg";
import ThunderIcon from "../../assets/thunder.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";

const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);
  const { climate, temperature, location, time } = weatherData;

  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Clear":
        return SunIcon;
      case "Clouds":
        return CloudIcon;
      case "Rain":
        return RainIcon;
      case "Thunderstorm":
        return ThunderIcon;
      case "Snow":
        return SnowIcon;
      case "Haze":
        return HazeIcon;
      case "Drizzle":
        return DrizzleIcon;
      case "Mist":
        return HazeIcon;
      case "Fog":
        return HazeIcon;
      default:
        return SunIcon;
    }
  };

  return (
    <div>
      <div className="md:-mt-10">
        <img
          className="w-10 xl:w-14"
          src={getWeatherIcon(climate)}
          alt="climate"
        />
        <div className="max-md:flex items-center max-md:space-x-5">
          <h1 className="text-[52px] md:text-[68px] lg:text-[80px] xl:text-[90px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-2 md:mb-5">
            <img className="w-6 xl:w-8" src={PinIcon} alt="pin" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              {location}
            </h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadline;
