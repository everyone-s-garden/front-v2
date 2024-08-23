export type WeatherValue =
  | '맑음'
  | '구름많음'
  | '비'
  | '비/눈'
  | '눈'
  | '소나기'
  | '흐림';

export type RegionName =
  | '강원도'
  | '서울특별시'
  | '경기도'
  | '경상남도'
  | '경상북도'
  | '광주광역시'
  | '대구광역시'
  | '대전광역시'
  | '부산광역시'
  | '세종특별자치시'
  | '울산광역시'
  | '인천광역시'
  | '전라남도'
  | '전라북도'
  | '제주특별자치도'
  | '충청남도'
  | '충청북도';

export interface RegionWeather {
  regionName: RegionName;
  skyValue: WeatherValue;
  temperatureValue: string;
}

export interface WeeklyWeatherData {
  regionName: RegionName;
  status: WeatherValue[];
}

export interface HourlyWeatherData {
  regionName: RegionName;
  weatherTimeResponses: {
    baseDate: string;
    temperature: string;
    skyStatus: WeatherValue;
    fsctDate: string;
    fsctTime: string;
  }[];
}
