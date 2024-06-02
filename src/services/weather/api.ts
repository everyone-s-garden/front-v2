import { HourlyWeatherData, RegionWeather, WeeklyWeatherData } from './types';
import apiClient from '@/api/apiClient';

const weatherAPI = {
  getWeatherByRegion: async (): Promise<RegionWeather[]> => {
    const { data } = await apiClient.get(`v1/weathers/all`);

    return data.weatherApiResult;
  },
  getHourlyWeather: async (
    lat: number,
    lng: number,
  ): Promise<HourlyWeatherData> => {
    const { data } = await apiClient.get(
      `v1/weathers/time?latitude=${lat}&longitude=${lng}`,
    );

    return data;
  },

  getWeeklyWeather: async (
    lat: number,
    lng: number,
  ): Promise<WeeklyWeatherData> => {
    const { data } = await apiClient.get(
      `v1/weathers/week?latitude=${lat}&longitude=${lng}`,
    );

    return data;
  },
};

export default weatherAPI;
