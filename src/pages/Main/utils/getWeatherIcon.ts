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
} from '@/assets/icons/weather';

const getWeatherIcon = (weather: string, main?: boolean): string => {
  switch (weather) {
    case '맑음':
      if (main) return mainSunnyIcon;

      return sunnyIcon;
    case '비':
      return rainIcon;
    case '비/눈':
      return rainSnowIcon;
    case '눈':
      return snowIcon;
    case '구름많음':
      if (main) return mainMostlyCloudyIcon;

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
