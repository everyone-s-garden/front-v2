import {
  cloudyIcon,
  mostlyCloudyIcon,
  rainIcon,
  rainSnowIcon,
  showerIcon,
  snowIcon,
  sunnyIcon,
} from '@/assets/icons/weather';

const getWeatherIcon = (weather: string): string => {
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
      return cloudyIcon;
    case '소나기':
      return showerIcon;
    case '흐림':
      return mostlyCloudyIcon;
    default:
      return sunnyIcon;
  }
};

export default getWeatherIcon;
