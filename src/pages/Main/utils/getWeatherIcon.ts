import {
  cloudyIcon,
  mostlyCloudyIcon,
  rainIcon,
  rainSnowIcon,
  showerIcon,
  snowIcon,
  sunnyIcon,
  mainMostlyCloudyIcon,
  mainSunnyIcon,
  mainCloudyIcon,
  mainRainIcon,
  mainRainSnowIcon,
  mainShowerIcon,
  mainSnowIcon,
} from '@/assets/icons/weather';

const getWeatherIcon = (weather: string, main?: boolean): string => {
  if (main) {
    switch (weather) {
      case '맑음':
        return mainSunnyIcon;
      case '비':
        return mainRainIcon;
      case '비/눈':
        return mainRainSnowIcon;
      case '눈':
        return mainSnowIcon;
      case '구름많음':
        return mainMostlyCloudyIcon;
      case '소나기':
        return mainShowerIcon;
      case '흐림':
        return mainCloudyIcon;
      default:
        return mainSunnyIcon;
    }
  }

  switch (weather) {
    case '맑음':
      return sunnyIcon;
    case '비':
      return rainIcon;
    case '비/눈':
      return rainSnowIcon;
    case '눈':
      return snowIcon;
    case '구름많음':
      return mostlyCloudyIcon;
    case '소나기':
      return showerIcon;
    case '흐림':
      return cloudyIcon;
    default:
      return sunnyIcon;
  }
};

export default getWeatherIcon;
