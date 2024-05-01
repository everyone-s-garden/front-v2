export type WeatherValue =
  | '맑음'
  | '구름많음'
  | '비'
  | '비/눈'
  | '눈'
  | '소나기'
  | '흐림';

export interface RegionWeather {
  regionName: string;
  skyValue: WeatherValue;
  temperatureValue: string;
}

export interface WeeklyWeatherData {
  regionName: string;
  status: WeatherValue[];
}

export interface HourlyWeatherData {
  regionName: string;
  weatherTimeResponses: {
    baseDate: string;
    temperature: string;
    skyStatus: WeatherValue;
    fsctDate: string;
    fsctTime: string;
  }[];
}
